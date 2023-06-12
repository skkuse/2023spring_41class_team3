import { Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';
import { TestInitDto } from 'src/coding-test/dto/testInit.dto';
import { Problem } from '@type';
import { exec } from 'child_process';
import fs from 'fs';
import { testcase } from './dto/create-problem.dto';
import { ProblemTestDto } from './dto/problemTest.dto';
import { PS_TIME_OUT } from '@constant';
import { v4 } from 'uuid';
import { CaseResultDto } from './dto/caseResult.dto';
import { TestResultDto } from './dto/testResult.dto';

@Injectable()
export class ProblemService {
	constructor(private readonly problemRepository: ProblemRepository) {}

	async getTestProblemList({ difficulty, number }: TestInitDto) {
		const problemDataList = await this.problemRepository.getRandomProblemList(
			difficulty,
			number
		);

		return problemDataList.map((problemData: Problem) => ({
			id: problemData._id,
			title: problemData.title,
			description: problemData.description,
			inputDescription: problemData.inputDescription,
			outputDescription: problemData.outputDescription,
			testcases: problemData.testcases,
		}));
	}

	async codeSubmit({ code, language, testcases }: ProblemTestDto) {
		const runId = v4();
		switch (language) {
			case 'python':
				const fileName = `${runId}.py`;
				const command = `python3 ${fileName}`;
				return this.runTest({ code, testcases, fileName, command });
			default:
				return;
		}
	}

	async runTest({ code, testcases, fileName, command }) {
		fs.writeFileSync(`./${fileName}`, code);

		const testList = testcases.map((testcase: testcase, testIdx: number) => {
			const { input, output } = testcase;
			return new Promise((resolve, reject) => {
				const start = Date.now();
				exec(
					`echo ${input} | ${command}`,
					{ timeout: PS_TIME_OUT },
					(error, stdout, stderr) => {
						const end = Date.now();
						const time = end - start;
						let isSuccess: boolean, message: string;

						if (error || stderr) {
							isSuccess = false;
							if (error.signal === 'SIGTERM') {
								message = `time out: ${PS_TIME_OUT}ms`;
							} else {
								reject(stderr);
							}
						} else if (stdout != output) {
							message = `mismatch output: ${stdout.trim()}`;
							isSuccess = false;
						} else {
							isSuccess = true;
						}

						const testResult = new CaseResultDto(
							stdout.trim(),
							testIdx,
							isSuccess,
							time,
							message
						);

						resolve(testResult);
					}
				);
			});
		});

		try {
			const caseResultList = await Promise.all(testList);
			return new TestResultDto({ code, run: true, caseResultList });
		} catch (err) {
			return new TestResultDto({ code, run: false, message: err });
		} finally {
			fs.unlink(`./${fileName}`, (err) => {
				if (err) throw err;
			});
		}
	}
}

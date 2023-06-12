import { BadRequestException, Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';
import { TestInitDto } from 'src/coding-test/dto/testInit.dto';
import { Problem } from '@type';
import { exec, execSync } from 'child_process';
import fs from 'fs';
import { testcase } from './dto/create-problem.dto';
import { ProblemTestDto } from './dto/problemTest.dto';
import { HttpExceptionMsg, PS_TIME_OUT } from '@constant';
import { v4 } from 'uuid';
import { CaseResultDto } from './dto/caseResult.dto';
import { TestResultDto } from './dto/testResult.dto';
import { ProblemResponseDto } from './dto/problemResponse.dto';

@Injectable()
export class ProblemService {
	constructor(private readonly problemRepository: ProblemRepository) {}

	async getTestProblemList({ difficulty, number }: TestInitDto) {
		const problemDataList = await this.problemRepository.getRandomProblemList(
			difficulty,
			number
		);

		return problemDataList.map(
			(problemData: Problem): ProblemResponseDto => ({
				id: problemData._id,
				title: problemData.title,
				description: problemData.description,
				inputDescription: problemData.inputDescription,
				outputDescription: problemData.outputDescription,
				testcases: problemData.testcases,
			})
		);
	}

	async codeSubmit({ code, language, testcases }: ProblemTestDto) {
		const runId = v4();
		switch (language) {
			case 'python':
				const fileName = `${runId}.py`;
				const command = `python3 ${fileName}`;
				return this.runScriptTest({ code, testcases, fileName, command });
			case 'c':
				return this.runClangTest({ code, testcases, runId, language });
			default:
				throw new BadRequestException(HttpExceptionMsg.NOT_SUPPORTED_LANGUAGE);
		}
	}

	async runClangTest({ code, testcases, runId, language }) {
		let compiler: string;
		switch (language) {
			case 'c':
				compiler = 'gcc';
				break;
			case 'cpp':
				compiler = 'g++';
				break;
			default:
				throw new BadRequestException(HttpExceptionMsg.NOT_SUPPORTED_LANGUAGE);
		}

		const fileName = `${runId}.${language}`;
		const command = `./${runId}`;
		fs.writeFileSync(`./${fileName}`, code);
		try {
			execSync(`${compiler} -o ${runId} ${fileName}`);
		} catch (err) {
			return new TestResultDto({ code, run: false, message: String(err.stderr) });
		}

		const testList = testcases.map((testcase: testcase, testIdx: number) => {
			return this.runTestCase({ testIdx, testcase, command });
		});

		try {
			const caseResultList = await Promise.all(testList);
			return new TestResultDto({ code, run: true, caseResultList });
		} catch (err) {
			return new TestResultDto({ code, run: false, message: err });
		} finally {
			fs.unlink(`./${runId}.${language}`, (err) => {
				if (err) throw err;
			});
			fs.unlink(`./${runId}`, (err) => {
				if (err) throw err;
			});
		}
	}

	async runScriptTest({ code, testcases, fileName, command }) {
		fs.writeFileSync(`./${fileName}`, code);

		const testList = testcases.map((testcase: testcase, testIdx: number) => {
			return this.runTestCase({ testIdx, testcase, command });
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

	runTestCase({ testIdx, testcase, command }): Promise<CaseResultDto> {
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
	}
}

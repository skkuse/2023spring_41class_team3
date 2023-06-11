import { Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';
import { Problem } from '@type';
import { TestInitDto } from 'src/coding-test/dto/testInit.dto';

@Injectable()
export class ProblemService {
	constructor(private readonly problemRepository: ProblemRepository) {}

	async getTestProblemList({ difficulty, number }: TestInitDto) {
		const idList = await this.problemRepository.getRandomProblemIdList(difficulty, number);
		const problemDataList = [];
		await Promise.all(
			idList.map((id) => {
				const problemData = this.problemRepository.findOne(id);
				problemDataList.push(problemData);
			})
		);

		const res = { problemInfo: [] };
		problemDataList.forEach((problemData: Problem) => {
			res.problemInfo.push({
				_id: problemData._id,
				title: problemData.title,
				description: problemData.description,
				constraint: problemData.constraint,
				testcases: problemData.testcases,
			});
		});

		return res;
	}
}

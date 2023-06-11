import { Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';
import { Problem } from '@type';
import { TestInitDto } from 'src/coding-test/dto/testInit.dto';

@Injectable()
export class ProblemService {
	constructor(private readonly problemRepository: ProblemRepository) {}

	async getTestProblemList({ difficulty, number }: TestInitDto) {
		const problemDataList = await this.problemRepository.getRandomProblemList(
			difficulty,
			number
		);

		const res = { problemInfo: [] };
		problemDataList.forEach((problemData: Problem) => {
			res.problemInfo.push({
				id: problemData._id,
				title: problemData.title,
				description: problemData.description,
				constraint: problemData.constraint,
			});
		});

		return res;
	}
}

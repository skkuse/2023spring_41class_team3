import { Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';
import { TestInitDto } from 'src/coding-test/dto/testInit.dto';
import { Problem } from '@type';

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
			constraint: problemData.constraint,
		}));
	}
}

import { Injectable } from '@nestjs/common';
import { ProblemRepository } from './repository/problem.repository';

@Injectable()
export class ProblemService {
	constructor(private readonly problemRepository: ProblemRepository) {}

	async getCodingtestSet(difficulty: number, num: number) {
		const ids = await this.problemRepository.getCodetestSet(difficulty, num);

		const res = { problemInfo: [] };
		for (const id of ids) {
			const problem = await this.problemRepository.findOne(id);
			res.problemInfo.push({
				_id: problem._id,
				title: problem.title,
				description: problem.description,
				constraint: problem.constraint,
				testcases: problem.testcases,
			});
		}

		return res;
	}
}

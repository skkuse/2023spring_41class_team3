import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { ProblemDocument } from '../entities/problem.entity';
import { MetaProblem, Problem } from '@type';
import { CreateProblemDto } from '../dto/create-problem.dto';

@Injectable()
export class ProblemRepository {
	constructor(@InjectModel('Problem') private readonly problemModel: Model<ProblemDocument>) {}

	async createProblem(problem: Problem): Promise<CreateProblemDto> {
		try {
			const createdProblem = new this.problemModel(problem);
			return await createdProblem.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async findOne(id: string): Promise<Problem> {
		try {
			const problem = await this.problemModel.findOne({ _id: id }).exec();
			return {
				_id: problem._id.toString(),
				title: problem.title,
				difficulty: problem.difficulty,
				tags: problem.tags,
				description: problem.description,
				constraint: problem.constraint,
				testcases: problem.testcases,
			};
		} catch (error) {
			throw new Error(error);
		}
	}

	async getCodetestSet(difficulty: number, num: number): Promise<string[]> {
		try {
			const problems = await this.problemModel.find({ difficulty: difficulty }).exec();
			while (problems.length > num) {
				problems.splice(Math.floor(Math.random() * problems.length));
			}
			return problems.map((problem) => {
				return problem._id.toString();
			});
		} catch (error) {
			throw new Error(error);
		}
	}
}

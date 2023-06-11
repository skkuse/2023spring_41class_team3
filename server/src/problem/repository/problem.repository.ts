import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { ProblemDocument } from '../entities/problem.entity';
import { Problem } from '@type';
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
				inputDescription: problem.inputDescription,
				outputDescription: problem.outputDescription,
				testcases: problem.testcases,
			};
		} catch (error) {
			throw new Error(error);
		}
	}

	async getRandomProblemList(difficulty: number, num: number): Promise<Problem[]> {
		try {
			const problemList: Problem[] = await this.problemModel.aggregate([
				{ $match: { difficulty: difficulty } },
				{ $sample: { size: num } },
			]);
			return problemList;
		} catch (error) {
			throw new Error(error);
		}
	}
}

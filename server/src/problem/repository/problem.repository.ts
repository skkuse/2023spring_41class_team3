import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}

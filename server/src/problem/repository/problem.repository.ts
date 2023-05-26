import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProblemMetadataDocument, ProblemMetadataEntity } from '../entities/problem.entity';
import { ProblemMetadata } from '@type';

@Injectable()
export class ProblemRepository {
	constructor(
		@InjectModel('ProblemMetadata')
		private readonly problemMetadataModel: Model<ProblemMetadataDocument> //
	) {}

	async createProblemMetadata(metadata: ProblemMetadata): Promise<ProblemMetadataEntity> {
		try {
			const createdProblemMetadata = new this.problemMetadataModel(metadata);
			return await createdProblemMetadata.save();
		} catch (error) {
			throw new Error(error);
		}
	}
}

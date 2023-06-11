import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { testcase } from '../dto/create-problem.dto';

export type ProblemDocument = HydratedDocument<ProblemEntity>;

@Schema()
export class ProblemEntity {
	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	difficulty: number;

	@Prop({ required: true })
	tags: string[];

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	constraint: string;

	@Prop({ required: true })
	testcases: testcase[];
}

export const ProblemSchema = SchemaFactory.createForClass(ProblemEntity);

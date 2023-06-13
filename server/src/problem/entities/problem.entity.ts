import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Testcase } from '../dto/testCase.dto';

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
	inputDescription: string;

	@Prop({ required: true })
	outputDescription: string;

	@Prop({ required: true })
	testcases: Testcase[];
}

export const ProblemSchema = SchemaFactory.createForClass(ProblemEntity);

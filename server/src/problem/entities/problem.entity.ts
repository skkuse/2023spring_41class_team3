import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProblemMetadataDocument = HydratedDocument<ProblemMetadataEntity>;

@Schema({ timestamps: true })
export class ProblemMetadataEntity {
	@Prop({ required: true, unique: true })
	problemId: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	difficulty: number;

	@Prop({ required: true })
	tags: string[];
}

export const ProblemMetadataSchema = SchemaFactory.createForClass(ProblemMetadataEntity);

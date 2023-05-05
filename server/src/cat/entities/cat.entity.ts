import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
	@Prop({ required: true })
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

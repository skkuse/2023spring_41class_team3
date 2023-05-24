import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
	@Prop({ required: true, unique: true })
	oauthId: string;

	@Prop({ required: true })
	userId: string;

	@Prop({ required: true })
	oauthType: string;

	@Prop()
	username?: string;

	@Prop()
	deletedAt?: Date;

	@Prop({ default: false })
	isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

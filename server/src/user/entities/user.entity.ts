import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
	@Prop({ required: true, unique: true })
	oauthId: string;

	@Prop({ required: true })
	oauth: string;

	@Prop()
	username?: string;

	@Prop({ validate: /\S+@\S+\.\S+/, unique: true })
	email?: string;

	@Prop()
	deletedAt?: Date;

	@Prop({ default: false })
	isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

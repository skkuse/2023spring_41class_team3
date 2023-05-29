import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error, Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { OauthInfo } from '@type';

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

	async saveUser(userInfo: OauthInfo): Promise<User> {
		try {
			const createdUser = new this.userModel(userInfo);
			return await createdUser.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	async findUser(oauthId: string): Promise<User> {
		try {
			return await this.userModel.findOne({ oauthId }).exec();
		} catch (error) {
			throw new Error(error);
		}
	}
}

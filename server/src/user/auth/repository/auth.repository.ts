import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { OauthInfo } from '@type';

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

	async saveUser(userInfo: OauthInfo): Promise<User> {
		const createdUser = new this.userModel(userInfo);
		return createdUser.save();
	}

	async findUser(oauthId: string): Promise<User> {
		return this.userModel.findOne({ oauthId }).exec();
	}
}

import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { OauthUrlDto } from 'src/user/dto/oauth-url.dto';
import { OauthType } from 'src/constant/auth.constant';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '../repository/auth.repository';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
		private readonly userRepository: UserRepository
	) {}

	@Get('login/oauth')
	getOauthPageUrl(@Query('type') type: OauthType) {
		const url = this.authService.getOauthPageUrl(type);
		return new OauthUrlDto(url);
	}

	@Get('login/oauth/callback')
	async initOauthProcess(
		@Query('code') authorizationCode: string,
		@Query('type') type: OauthType,
		@Res() res: Response
	) {
		if (!authorizationCode) {
			res.redirect(this.configService.get<string>('CLIENT_DOMAIN'));
			return;
		}
		const userInfo = await this.authService.getOauthUserInfo(authorizationCode, type);
		let user = await this.userRepository.findUser(userInfo.oauthId);
		if (!user) {
			user = await this.userRepository.saveUser(userInfo);
		}
		return user;
	}
}

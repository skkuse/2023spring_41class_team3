import { HttpExceptionMsg, JWT_ACCESS_SECRET } from '@constant';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { JwtPayload } from '@type';
import { ACCESS_TOKEN_LIMIE_TIME, OauthType } from 'src/constant/auth.constant';
import { GitHubOauth } from 'src/user/oauth/oauth.github';
import { OauthService } from 'src/user/oauth/oauth.interface';

@Injectable()
export class AuthService {
	private oauthInstance: OauthService;

	constructor(
		private readonly githubOauth: GitHubOauth,
		private readonly configService: ConfigService,
		private readonly jwtService: JwtService
	) {}

	getOauthPageUrl(type: OauthType): string {
		this.setOauthInstanceByType(type);

		return this.oauthInstance.getSocialUrl();
	}

	async getOauthUserInfo(code: string, type: OauthType) {
		this.setOauthInstanceByType(type);

		const accessToken = await this.oauthInstance.getAccessToken(code);
		const userInfo = await this.oauthInstance.getSocialInfo(accessToken);

		return userInfo;
	}

	setOauthInstanceByType(type: OauthType) {
		switch (type) {
			case OauthType.GITHUB:
				this.oauthInstance = this.githubOauth;
				break;
			default:
				throw new BadRequestException(HttpExceptionMsg.INVALID_OAUTH_TYPE);
		}
	}

	createAccessToken(payload: JwtPayload): string {
		const { oauthId, oauthType } = payload;
		const jwtOptions: JwtSignOptions = {
			secret: this.configService.get<string>(JWT_ACCESS_SECRET),
			expiresIn: ACCESS_TOKEN_LIMIE_TIME,
		};

		return this.jwtService.sign({ oauthId, oauthType }, jwtOptions);
	}
}

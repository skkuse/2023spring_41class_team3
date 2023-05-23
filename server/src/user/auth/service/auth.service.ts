import { HttpExceptionMsg } from '@constant';
import { BadRequestException, Injectable } from '@nestjs/common';
import { OauthType } from 'src/constant/auth.constant';
import { GitHubOauth } from 'src/user/oauth/oauth.github';
import { OauthService } from 'src/user/oauth/oauth.interface';

@Injectable()
export class AuthService {
	private oauthInstance: OauthService;

	constructor(private readonly githubOauth: GitHubOauth) {}

	getOauthPageUrl(type: OauthType): string {
		this.setOauthInstanceByType(type);

		return this.oauthInstance.getSocialUrl();
	}

	async getOauthUserInfo(code: string, type: OauthType) {
		this.setOauthInstanceByType(type);

		return '';
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
}

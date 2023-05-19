import { OauthInfo } from '@type';
import { OauthService } from './oauth.interface';
import { ConfigService } from '@nestjs/config';
import { GITHUB_AUTHORIZATION_URL, GITHUB_REDIRECT_PATH } from 'src/constant/auth.constant';
import { CLIENT_DOMAIN, GITHUB_CLIENT_ID } from 'src/constant/env.constant';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GitHubOauth implements OauthService {
	constructor(private readonly configService: ConfigService) {}

	private clientId = this.configService.get<string>(GITHUB_CLIENT_ID);
	private redirectUri = this.configService.get<string>(CLIENT_DOMAIN) + GITHUB_REDIRECT_PATH;

	getSocialUrl(): string {
		const query = `?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user`;
		return GITHUB_AUTHORIZATION_URL + query;
	}

	getAccessTokenByAuthorizationCode(authorizationCode: string): Promise<string> {
		throw new Error('Method not implemented.');
	}
	getSocialInfoByAccessToken(accessToken: string): Promise<OauthInfo> {
		throw new Error('Method not implemented.');
	}
}

import { OauthInfo } from '@type';
import { OauthService } from './oauth.interface';
import { ConfigService } from '@nestjs/config';
import {
	GITHUB_ACCESS_TOKEN_URL,
	GITHUB_AUTHORIZATION_URL,
	GITHUB_REDIRECT_PATH,
} from 'src/constant/auth.constant';
import { CLIENT_DOMAIN, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from 'src/constant/env.constant';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import querystring from 'querystring';
import { HttpExceptionMsg } from '@constant';

@Injectable()
export class GitHubOauth implements OauthService {
	constructor(private readonly configService: ConfigService) {}

	private clientId = this.configService.get<string>(GITHUB_CLIENT_ID);
	private clientSecret = this.configService.get<string>(GITHUB_CLIENT_SECRET);
	private redirectUri = this.configService.get<string>(CLIENT_DOMAIN) + GITHUB_REDIRECT_PATH;

	getSocialUrl(): string {
		const query = `?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user`;
		return GITHUB_AUTHORIZATION_URL + query;
	}

	async getAccessTokenByAuthorizationCode(authorizationCode: string): Promise<string> {
		const query = `?client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${authorizationCode}&redirect_uri=${this.redirectUri}`;
		const header: AxiosRequestConfig = { headers: { Accept: 'application/json' } };
		try {
			const res = await axios.post(GITHUB_ACCESS_TOKEN_URL + query, header);
			const { access_token } = querystring.parse(res.data);
			return access_token as string;
		} catch (err) {
			throw new UnauthorizedException(HttpExceptionMsg.AUTHENTICATION_FAILED);
		}
	}

	getSocialInfoByAccessToken(accessToken: string): Promise<OauthInfo> {
		throw new Error('Method not implemented.');
	}
}

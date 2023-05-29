import { OauthInfo } from '@type';
import { OauthService } from './oauth.interface';
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import querystring from 'querystring';
import {
	GITHUB_ACCESS_TOKEN_URL,
	GITHUB_USER_INFO_API_URL,
	GITHUB_AUTHORIZATION_URL,
	GITHUB_REDIRECT_PATH,
	OauthType,
	HttpExceptionMsg,
	CLIENT_DOMAIN,
	OAUTH_GITHUB_CLIENT_ID,
	OAUTH_GITHUB_CLIENT_SECRET,
} from '@constant';

@Injectable()
export class GitHubOauth implements OauthService {
	constructor(private readonly configService: ConfigService) {}

	private clientId = this.configService.get<string>(OAUTH_GITHUB_CLIENT_ID);
	private clientSecret = this.configService.get<string>(OAUTH_GITHUB_CLIENT_SECRET);
	private redirectUri = this.configService.get<string>(CLIENT_DOMAIN) + GITHUB_REDIRECT_PATH;

	getSocialUrl(): string {
		const query = `?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=user`;
		return GITHUB_AUTHORIZATION_URL + query;
	}

	async getAccessToken(authorizationCode: string): Promise<string> {
		const query = `?client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${authorizationCode}&redirect_uri=${this.redirectUri}`;
		const header: AxiosRequestConfig = { headers: { Accept: 'application/json' } };
		try {
			const res = await axios.post(GITHUB_ACCESS_TOKEN_URL + query, header);
			const { access_token } = querystring.parse(res.data);
			if (!access_token)
				throw new UnauthorizedException(HttpExceptionMsg.INVALID_ACCESS_TOKEN);

			return access_token as string;
		} catch (_) {
			throw new UnauthorizedException(HttpExceptionMsg.AUTHENTICATION_FAILED);
		}
	}

	async getSocialInfo(accessToken: string): Promise<OauthInfo> {
		const tokenType = 'Bearer';
		const header: AxiosRequestConfig = {
			headers: { Authorization: `${tokenType} ${accessToken}` },
		};

		try {
			const res = await axios.get(GITHUB_USER_INFO_API_URL, header);
			const { login, node_id } = res.data;
			if (!login || !node_id)
				throw new UnauthorizedException(HttpExceptionMsg.AUTHENTICATION_FAILED);

			return { userId: login, oauthId: node_id, oauthType: OauthType.GITHUB };
		} catch (_) {
			throw new UnauthorizedException(HttpExceptionMsg.AUTHENTICATION_FAILED);
		}
	}
}

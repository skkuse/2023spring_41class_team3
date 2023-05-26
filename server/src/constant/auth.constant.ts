import { CookieOptions } from 'express';

export enum OauthType {
	GITHUB = 'github',
}

export const OAUTH_CALLBACK_PATH = 'api/auth/oauth/callback';
export const AUTHORIZATION_TOKEN_TYPE = 'Bearer';

// github
export const GITHUB_AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
export const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
export const GITHUB_REDIRECT_PATH = '/api/auth/login/oauth/callback?type=github';
export const GITHUB_USER_INFO_API_URL = 'https://api.github.com/user';

// jwt
export const cookieMaxAge = 1000 * 60 * 60 * 24 * 14; // 14 days
export const ACCESS_STRATEGY_KEY = 'jwt-access-token';
export const ACCESS_TOKEN_LIMIE_TIME = '14d';
export const jwtCookieOptions: CookieOptions = {
	httpOnly: true,
	secure: true,
	maxAge: cookieMaxAge,
};

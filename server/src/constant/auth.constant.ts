export enum OauthType {
	GITHUB = 'github',
}

export const OAUTH_CALLBACK_PATH = 'api/auth/oauth/callback';
export const AUTHORIZATION_TOKEN_TYPE = 'Bearer';

// github
export const GITHUB_AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
export const GITHUB_REDIRECT_PATH = '/login/oauth/callback?type=github';

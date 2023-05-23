export enum OauthType {
	GITHUB = 'github',
}

export const OAUTH_CALLBACK_PATH = 'api/auth/oauth/callback';
export const AUTHORIZATION_TOKEN_TYPE = 'Bearer';

// github
export const GITHUB_AUTHORIZATION_URL = 'https://github.com/login/oauth/authorize';
export const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
export const GITHUB_REDIRECT_PATH = '/api/auth/login/oauth/callback?type=github';
export const GITHUB_API_BASE_URL = 'https://api.github.com/user';

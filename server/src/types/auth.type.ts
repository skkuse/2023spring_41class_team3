export interface OauthInfo {
	userId: string;
	oauthId: string;
	oauthType: string;
}

export interface JwtPayload {
	oauthId: string;
	oauthType: string;
}

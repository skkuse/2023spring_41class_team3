import { IsNotEmpty, IsString } from 'class-validator';

export class OauthUrlDto {
	@IsString()
	@IsNotEmpty()
	pageUrl: string;

	constructor(pageUrl: string) {
		this.pageUrl = pageUrl;
	}
}

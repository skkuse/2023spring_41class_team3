import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { OauthUrlDto } from 'src/user/dto/oauth-url.dto';
import { OauthType } from 'src/constant/auth.constant';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('login/oauth')
	getOauthPageUrl(@Query('type') type: OauthType) {
		const url = this.authService.getOauthPageUrl(type);
		return new OauthUrlDto(url);
	}
}

import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { OauthUrlDto } from 'src/user/dto/oauth-url.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('login/oauth?type=:type')
	getOauthPageUrl() {
		const url = this.authService.getOauthPageUrl();
		return new OauthUrlDto(url);
	}
}

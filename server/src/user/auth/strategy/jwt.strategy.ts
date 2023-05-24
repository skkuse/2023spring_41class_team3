import { ACCESS_STRATEGY_KEY, JWT_ACCESS_SECRET } from '@constant';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../service/auth.service';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '@type';

@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy, ACCESS_STRATEGY_KEY) {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {
		super({
			ignoreExpiration: false,
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request) => {
					const token = req?.cookies.accessToken;
					return token ?? null;
				},
			]),
			secretOrKey: configService.get(JWT_ACCESS_SECRET),
			passReqToCallback: true,
		});
	}

	async validate(req: Request, payload: JwtPayload) {
		const accessToken = this.authService.createAccessToken(payload);
		req.cookies.accessToken = accessToken;
		return payload;
	}
}

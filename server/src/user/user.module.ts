import { Module } from '@nestjs/common';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/controller/auth.controller';
import { GitHubOauth } from './oauth/oauth.github';
import { ConfigService } from '@nestjs/config';

@Module({
	controllers: [AuthController],
	providers: [AuthService, GitHubOauth, ConfigService],
})
export class UserModule {}

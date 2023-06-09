import { Module } from '@nestjs/common';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/controller/auth.controller';
import { GitHubOauth } from './oauth/oauth.github';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './auth/repository/auth.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtAccessTokenStrategy } from './auth/strategy/jwt.strategy';

@Module({
	imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
	controllers: [AuthController],
	providers: [
		AuthService,
		GitHubOauth,
		ConfigService,
		UserRepository,
		JwtService,
		JwtAccessTokenStrategy,
	],
})
export class UserModule {}

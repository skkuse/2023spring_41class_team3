import { Module } from '@nestjs/common';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/controller/auth.controller';

@Module({
	controllers: [AuthController],
	providers: [AuthService],
})
export class UserModule {}

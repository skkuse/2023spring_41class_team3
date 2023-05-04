import { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';

export const envConfig: ConfigModuleOptions = {
	isGlobal: true, // 환경 변수를 전역으로 사용
	envFilePath: process.env.NODE_ENV === 'deploy' ? 'deploy.env' : '.env',
	// 루트 경로에서 .env 사용 (cross-env로 환경에 따른 .env 적용도 가능)

	validationSchema: Joi.object({}),
};

import { ConfigModuleOptions } from '@nestjs/config';
import Joi from 'joi';

export const envConfig: ConfigModuleOptions = {
	isGlobal: true, // 환경 변수를 전역으로 사용
	envFilePath: process.env.NODE_ENV === 'deploy' ? 'deploy.env' : '.env',
	// 루트 경로에서 .env 사용 (cross-env로 환경에 따른 .env 적용도 가능)

	validationSchema: Joi.object({
		// .env 파일에 적용할 validation
		MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
		MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
		MONGO_INITDB_DATABASE: Joi.string().required(),
		MONGO_SERVER_IP: Joi.string().required(),
		MONGO_SERVER_PORT: Joi.string().required(),
		ME_CONFIG_MONGODB_ADMINUSERNAME: Joi.string().required(),
		ME_CONFIG_MONGODB_ADMINPASSWORD: Joi.string().required(),
		GITHUB_CLIENT_ID: Joi.string().required(),
		GITHUB_CLIENT_SECRET: Joi.string().required(),
		CLIENT_DOMAIN: Joi.string().required(),
		SERVER_DOMAIN: Joi.string().required(),
		JWT_ACCESS_SECRET: Joi.string().required(),
	}),
};

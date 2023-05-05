import { ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions, MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleAsyncOptions = {
	useFactory: async (configService: ConfigService): Promise<MongooseModuleOptions> => ({
		uri: `mongodb://${configService.get('MONGO_SERVER_IP')}:${configService.get(
			'MONGO_SERVER_PORT'
		)}`,
		user: configService.get('MONGO_INITDB_ROOT_USERNAME'),
		pass: configService.get('MONGO_INITDB_ROOT_PASSWORD'),
		dbName: configService.get('MONGO_INITDB_DATABASE'),
	}),
	inject: [ConfigService],
};

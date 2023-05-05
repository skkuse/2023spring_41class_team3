import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		ConfigModule.forRoot(envConfig),
		MongooseModule.forRoot(
			`mongodb://${process.env.MONGO_SERVER_IP}:${process.env.MONGO_SERVER_PORT}`
		),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

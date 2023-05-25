import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './config/mongoose.config';
import { UserModule } from './user/user.module';
import { OpenaiController } from './openai/openai.controller';

@Module({
	imports: [
		ConfigModule.forRoot(envConfig),
		MongooseModule.forRootAsync(mongooseConfig),
		UserModule,
	],
	controllers: [AppController, OpenaiController],
	providers: [AppService],
})
export class AppModule {}

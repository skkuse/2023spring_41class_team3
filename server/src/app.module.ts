import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './config/mongoose.config';
import { UserModule } from './user/user.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ProblemModule } from './problem/problem.module';

@Module({
	imports: [
		ConfigModule.forRoot(envConfig),
		MongooseModule.forRootAsync(mongooseConfig),
		UserModule,
		FeedbackModule,
		ProblemModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

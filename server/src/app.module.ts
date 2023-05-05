import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from '@config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import { mongooseConfig } from './config/mongoose.config';

@Module({
	imports: [
		ConfigModule.forRoot(envConfig),
		MongooseModule.forRootAsync(mongooseConfig),
		CatModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

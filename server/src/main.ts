import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpLoggingInterceptor } from './interceptor/http.interceptor';
import { HttpExceptionFilter } from './filter/http.filter';
import { MongooseExceptionFilter } from './filter/mongoose.filter';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeOptions } from './config/validation-pipe.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(cookieParser());
	app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
	app.useGlobalInterceptors(new HttpLoggingInterceptor());
	app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalFilters(new MongooseExceptionFilter());
	app.setGlobalPrefix('api');

	await app.listen(8080);
}
bootstrap();

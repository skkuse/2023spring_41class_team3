import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpLoggingInterceptor } from './interceptor/http.interceptor';
import { HttpExceptionFilter } from './filter/http.filter';
import { MongooseExceptionFilter } from './filter/mongoose.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalInterceptors(new HttpLoggingInterceptor());
	app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalFilters(new MongooseExceptionFilter());
	app.setGlobalPrefix('api');

	await app.listen(8080);
}
bootstrap();

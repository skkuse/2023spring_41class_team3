import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { Error } from 'mongoose';

@Catch(Error)
export class MongooseExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger('MONGOOSE');
	private readonly statusCode = 500;

	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const res = ctx.getResponse<Response>();
		const req = ctx.getRequest<Request>();

		const timestamp = new Date().toISOString();
		this.logger.error(`${req.method} ${req.url}\n${exception.stack}`);

		res.status(this.statusCode).json({
			timestamp,
			statusCode: this.statusCode,
			path: req.url,
		});
	}
}

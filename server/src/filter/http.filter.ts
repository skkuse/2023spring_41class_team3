import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger('HTTP');

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const res = ctx.getResponse<Response>();
		const req = ctx.getRequest<Request>();
		const status = exception.getStatus();

		const timestamp = new Date().toISOString();
		this.logger.error(`${req.method} ${req.url}\n${exception.stack}`);

		res.status(status).json({
			timestamp,
			statusCode: status,
			path: req.url,
		});
	}
}

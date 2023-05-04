import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
	private readonly logger = new Logger('HTTP');

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const reqTime = Date.now();

		const ctx = context.switchToHttp();
		const req: Request = ctx.getRequest();
		const res: Response = ctx.getResponse();
		const [method, url, httpStatusCode] = [req.method, req.url, res.status];

		this.logger.log(`${method} ${url}`);

		return next.handle().pipe(
			tap(() => {
				const resTime = Date.now();
				this.logger.log(`[${resTime - reqTime}ms] ${httpStatusCode} ${method} ${url}`);
			})
		);
	}
}

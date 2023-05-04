import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger = new Logger('HTTP');

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const reqTime = Date.now();

		const req: Request = context.switchToHttp().getRequest();
		const [method, url] = [req.method, req.url];

		this.logger.log(`${method} ${url}`);

		return next.handle().pipe(
			tap(() => {
				const resTime = Date.now();
				this.logger.log(`[${resTime - reqTime}ms] ${method} ${url}`);
			})
		);
	}
}

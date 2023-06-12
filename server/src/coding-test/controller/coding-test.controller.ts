import { Body, Controller, MessageEvent, Param, Post, Req, Sse, UseGuards } from '@nestjs/common';
import { CodingTestService } from '../service/coding-test.service';
import { ProblemService } from 'src/problem/problem.service';
import { TestInitDto } from '../dto/testInit.dto';
import { JwtAuthGuard } from 'src/user/auth/guard/jwt.guard';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { OauthInfo } from '@type';

@UseGuards(JwtAuthGuard)
@Controller('coding-test')
export class CodingTestController {
	constructor(
		private readonly codingTestService: CodingTestService,
		private readonly problemService: ProblemService
	) {}

	@Post('initiation')
	async testIniticate(@Req() req: Request, @Body() testInitDto: TestInitDto) {
		const { oauthId } = req.user as OauthInfo;
		return await this.codingTestService.initiateTest(oauthId, testInitDto);
	}

	@Sse('termination/:testId')
	testTerminate(@Req() req: Request, @Param('testId') testId: string): Observable<MessageEvent> {
		const { oauthId } = req.user as OauthInfo;
		return this.codingTestService.terminateTest(oauthId, testId);
	}
}

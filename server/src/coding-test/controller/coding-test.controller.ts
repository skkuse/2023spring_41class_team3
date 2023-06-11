import { Body, Controller, MessageEvent, Param, Post, Sse, UseGuards } from '@nestjs/common';
import { CodingTestService } from '../service/coding-test.service';
import { ProblemService } from 'src/problem/problem.service';
import { TestInitDto } from '../dto/testInit.dto';
import { JwtAuthGuard } from 'src/user/auth/guard/jwt.guard';
import { Observable } from 'rxjs';

@UseGuards(JwtAuthGuard)
@Controller('coding-test')
export class CodingTestController {
	constructor(
		private readonly codingTestService: CodingTestService,
		private readonly problemService: ProblemService
	) {}

	@Post('initiation')
	async testIniticate(@Body() testInitDto: TestInitDto) {
		const testId = this.codingTestService.initiateTest(testInitDto);
		const problemList = await this.problemService.getTestProblemList(testInitDto);
		return { problemList, testId };
	}

	@Sse('termination/:testId')
	testTerminate(@Param('testId') testId: string): Observable<MessageEvent> {
		return this.codingTestService.terminateTest(testId);
	}
}

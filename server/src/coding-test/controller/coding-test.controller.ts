import { Controller, Get, Query, Req, Sse, UseGuards } from '@nestjs/common';
import { CodingTestService } from '../service/coding-test.service';
import { ProblemService } from 'src/problem/problem.service';
import { TestInitDto } from '../dto/testInit.dto';
import { JwtAuthGuard } from 'src/user/auth/guard/jwt.guard';
import { Request } from 'express';
import { OauthInfo } from '@type';

@UseGuards(JwtAuthGuard)
@Controller('coding-test')
export class CodingTestController {
	constructor(
		private readonly codingTestService: CodingTestService,
		private readonly problemService: ProblemService
	) {}

	@Get('initiation')
	async testIniticate(@Req() req: Request, @Query() testInitDto: TestInitDto) {
		const { userId } = req.user as OauthInfo;
		this.codingTestService.initiateTest(userId, Date.now(), testInitDto);
		return await this.problemService.getTestProblemList(testInitDto);
	}
}

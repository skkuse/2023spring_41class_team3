import { Controller, Get, Query } from '@nestjs/common';
import { CodingTestService } from '../service/coding-test.service';
import { ProblemService } from 'src/problem/problem.service';
import { TestProblemListDto } from '../dto/testProblemList.dto';

@Controller('coding-test')
export class CodingTestController {
	constructor(
		private readonly codingTestService: CodingTestService,
		private readonly problemService: ProblemService
	) {}

	@Get('problems')
	async getTestProblemList(@Query() testProblemListDto: TestProblemListDto) {
		return await this.problemService.getTestProblemList(testProblemListDto);
	}
}

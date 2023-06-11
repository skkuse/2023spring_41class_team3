import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ProblemRepository } from './repository/problem.repository';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
	constructor(
		private readonly problemRepository: ProblemRepository,
		private readonly problemService: ProblemService
	) {}

	@Post('')
	create(@Body() createProblemDto: CreateProblemDto) {
		return this.problemRepository.createProblem(createProblemDto);
	}

	@Get('')
	getCodeSetIDs(@Query('difficulty') difficulty: string, @Query('num') num: string) {
		return this.problemRepository.getRandomProblemIdList(+difficulty, +num);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.problemRepository.findOne(id);
	}
}

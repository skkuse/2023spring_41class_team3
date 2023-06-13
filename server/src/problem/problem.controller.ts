import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ProblemRepository } from './repository/problem.repository';
import { ProblemTestDto } from './dto/problemTest.dto';
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

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.problemRepository.findOne(id);
	}

	@Post('test')
	problemTest(@Body() problemTestDto: ProblemTestDto) {
		return this.problemService.testCaseSubmit(problemTestDto);
	}
}

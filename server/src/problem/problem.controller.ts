import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ProblemRepository } from './repository/problem.repository';

@Controller('problem')
export class ProblemController {
	constructor(private readonly problemRepository: ProblemRepository) {}

	@Post('')
	create(@Body() createProblemDto: CreateProblemDto) {
		return this.problemRepository.createProblem(createProblemDto);
	}

	@Get('')
	getCodeSetIDs(@Query('difficulty') difficulty: string, @Query('num') num: string) {
		return this.problemRepository.getCodetestSet(+difficulty, +num);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.problemRepository.findOne(id);
	}

	@Get('codingtest')
	getCodeSet(@Query('difficulty') difficulty: string, @Query('num') num: string) {
		return;
	}
}

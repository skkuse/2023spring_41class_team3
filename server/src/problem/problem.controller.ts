import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ProblemRepository } from './repository/problem.repository';

@Controller('problem')
export class ProblemController {
	constructor(private readonly problemRepository: ProblemRepository) {}

	@Post('')
	create(@Body() createProblemDto: CreateProblemDto) {
		return this.problemRepository.createProblem(createProblemDto);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.problemRepository.findOne(id);
	}
}

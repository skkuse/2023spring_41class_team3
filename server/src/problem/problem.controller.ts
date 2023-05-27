import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { ProblemRepository } from './repository/problem.repository';

@Controller('problem')
export class ProblemController {
	constructor(
		private readonly problemService: ProblemService,
		private readonly problemRepository: ProblemRepository
	) {}

	@Post('new')
	create(@Body() createProblemDto: CreateProblemDto) {
		return this.problemRepository.createProblem(createProblemDto);
	}

	@Get()
	findAll() {
		return this.problemService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.problemRepository.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProblemDto: UpdateProblemDto) {
		return this.problemService.update(+id, updateProblemDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.problemService.remove(+id);
	}
}

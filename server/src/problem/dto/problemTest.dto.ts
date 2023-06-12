import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { testcase } from './create-problem.dto';

export class ProblemTestDto {
	@IsNotEmpty()
	@IsString()
	code: string;

	@IsNotEmpty()
	@IsString()
	language: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => testcase)
	testcases: testcase[];
}

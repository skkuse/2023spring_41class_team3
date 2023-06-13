import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Testcase } from './testCase.dto';

export class ProblemTestDto {
	@IsNotEmpty()
	@IsString()
	code: string;

	@IsNotEmpty()
	@IsString()
	language: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => Testcase)
	testcases: Testcase[];
}

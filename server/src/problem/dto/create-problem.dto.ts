import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Testcase } from './testCase.dto';

export class CreateProblemDto {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsNotEmpty()
	@IsInt()
	difficulty: number;

	@IsNotEmpty()
	@IsString({ each: true })
	tags: string[];

	@IsNotEmpty()
	@IsString()
	description: string;

	@IsNotEmpty()
	@IsString()
	inputDescription: string;

	@IsNotEmpty()
	@IsString()
	outputDescription: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => Testcase)
	testcases: Testcase[];
}

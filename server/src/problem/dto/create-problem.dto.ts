import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

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
	constraint: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => testcase)
	testcases: testcase[];
}

export class testcase {
	@IsNotEmpty()
	input: string | number;

	@IsNotEmpty()
	output: string | number;
}

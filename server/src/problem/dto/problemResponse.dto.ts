import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Testcase } from './testCase.dto';

export class ProblemResponseDto {
	@IsString()
	id: string;

	@IsNotEmpty()
	@IsString()
	title: string;

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

	constructor(
		id: string,
		title: string,
		description: string,
		inputDescription: string,
		outputDescription: string,
		testcases: Testcase[]
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.inputDescription = inputDescription;
		this.outputDescription = outputDescription;
		this.testcases = testcases;
	}
}

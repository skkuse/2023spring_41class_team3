import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { testcase } from './create-problem.dto';
import { Type } from 'class-transformer';

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
	@Type(() => testcase)
	testcases: testcase[];

	constructor(
		id: string,
		title: string,
		description: string,
		inputDescription: string,
		outputDescription: string,
		testcases: testcase[]
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.inputDescription = inputDescription;
		this.outputDescription = outputDescription;
		this.testcases = testcases;
	}
}

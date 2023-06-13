import { IsNotEmpty } from 'class-validator';

export class Testcase {
	@IsNotEmpty()
	input: string | number;

	@IsNotEmpty()
	output: string | number;
}

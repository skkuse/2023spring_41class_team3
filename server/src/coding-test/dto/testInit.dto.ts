import { IsInt } from 'class-validator';

export class TestInitDto {
	@IsInt()
	difficulty: number;

	@IsInt()
	number: number;
}

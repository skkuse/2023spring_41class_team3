import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class TestProblemListDto {
	@IsInt()
	@Type(() => Number)
	difficulty: number;

	@IsInt()
	@Type(() => Number)
	number: number;
}

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CaseResultDto {
	@IsNotEmpty()
	output: string | number;

	@IsNotEmpty()
	@IsInt()
	testIdx: number;

	@IsNotEmpty()
	@IsBoolean()
	isSuccess: boolean;

	@IsNotEmpty()
	@IsInt()
	time: number;

	@IsOptional()
	@IsString()
	message?: string;

	constructor(
		output: string | number,
		testIdx: number,
		isSuccess: boolean,
		time: number,
		message?: string
	) {
		this.output = output;
		this.testIdx = testIdx;
		this.isSuccess = isSuccess;
		this.time = time;
		this.message = message;
	}
}

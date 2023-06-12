import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CaseResultDto } from './caseResult.dto';
import { Type } from 'class-transformer';

export class TestResultDto {
	@IsNotEmpty()
	@IsString()
	code: string;

	@IsNotEmpty()
	@IsBoolean()
	run: boolean;

	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => CaseResultDto)
	caseResultList?: CaseResultDto[];

	@IsOptional()
	@IsString()
	message?: string;

	constructor({
		code,
		run,
		caseResultList,
		message,
	}: {
		code: string;
		run: boolean;
		caseResultList?: CaseResultDto[];
		message?: string;
	}) {
		this.code = code;
		this.run = run;
		this.caseResultList = caseResultList;
		this.message = message;
	}
}

export class CreateProblemDto {
	problemN: number;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string[];
}

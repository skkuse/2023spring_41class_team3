export class CreateProblemDto {
	problemId: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string[];
}

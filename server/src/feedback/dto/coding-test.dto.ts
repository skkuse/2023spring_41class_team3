import { SolvedProblemDto } from './solved-problem.dto';

export class CodingTestDto {
	id: string;
	difficulty: number;
	problem: SolvedProblemDto[];
}

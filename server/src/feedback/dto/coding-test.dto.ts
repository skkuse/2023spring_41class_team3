import { SolvedProblemDto } from './problem.dto';

export class CodingTestDto {
	id: string;
	difficulty: number;
	problem: SolvedProblemDto[];
}

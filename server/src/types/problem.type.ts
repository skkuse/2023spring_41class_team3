export interface Problem {
	problemN: number;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string[];
}

export interface MetaProblem {
	problemN: string;
	title: string;
	difficulty: number;
	tags: string[];
}

export interface ProblemDescription {
	problemN: string;
	description: string;
	constraint: string[];
}

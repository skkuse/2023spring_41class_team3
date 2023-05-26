export interface Problem {
	problemId: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string[];
}

export interface ProblemMetadata {
	problemId: string;
	title: string;
	difficulty: number;
	tags: string[];
}

export interface ProblemDescription {
	problemId: string;
	description: string;
	constraint: string[];
}

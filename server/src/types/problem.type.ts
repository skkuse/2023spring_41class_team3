import { testcase } from 'src/problem/dto/create-problem.dto';

export interface Problem {
	_id?: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string;
	testcases: testcase[];
}

export interface MetaProblem {
	_id: string;
	title: string;
	difficulty: number;
	tags: string[];
}

export interface ProblemDescription {
	_id: string;
	title: string;
	description: string;
	constraint: string;
	testcases: testcase[];
}

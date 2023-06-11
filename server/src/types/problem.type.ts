import { testcase } from 'src/problem/dto/create-problem.dto';

export interface Problem {
	_id?: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	inputDescription: string;
	outputDescription: string;
	testcases: testcase[];
}

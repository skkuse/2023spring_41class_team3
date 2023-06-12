import { Testcase } from 'src/problem/dto/testCase.dto';

export interface Problem {
	_id?: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	inputDescription: string;
	outputDescription: string;
	testcases: Testcase[];
}

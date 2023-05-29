import { ObjectId } from 'mongoose';

export interface Problem {
	_id?: string;
	title: string;
	difficulty: number;
	tags: string[];
	description: string;
	constraint: string[];
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
	constraint: string[];
}

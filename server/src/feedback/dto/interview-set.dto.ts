import { InterviewDto } from './interview.dto';

export class InterviewSetDto {
	id: string;
	interviewData: InterviewDto[];
	overallEvaluation: string;
}

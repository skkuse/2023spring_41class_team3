import { CodeFeedbackDto } from './codefeedback.dto';

export class CodeFeedbackSetDto {
	results: CodeFeedbackDto[];
	analysis: string;
	feedback: string;
}

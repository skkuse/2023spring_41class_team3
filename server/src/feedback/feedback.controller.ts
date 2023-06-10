import { Body, Controller, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CodingTestDto } from './dto/coding-test.dto';
import { InterviewSetDto } from './dto/interview-set.dto';

@Controller('feedback')
export class FeedbackController {
	constructor(private readonly feedbackService: FeedbackService) {}

	// Experimental Code
	@Get('coding-test/trial')
	async codingTestCompletionTrial() {
		const str = this.feedbackService.getCodeEvaluation('this is a code sent to GPT.');
		return str;
	}

	@Get('coding-test/completion')
	async codingTestCompletion(@Body() codingTestDto: CodingTestDto) {
		const strarr = new Array(codingTestDto.problem.length);
		for (let i = 0; codingTestDto.problem.length; i++) {
			const str = this.feedbackService.getCodeEvaluation(codingTestDto.problem[i].code);
			strarr.push(str);
		}
		return strarr;
	}
	@Get('coding-test/interview')
	async interviewProblem(@Body() interviewSetDto: InterviewSetDto) {
		const strarr = new Array(interviewSetDto.interviewData.length);
		for (let i = 0; interviewSetDto.interviewData.length; i++) {
			const str = this.feedbackService.getInterviewFeedback(
				interviewSetDto.interviewData[i].description,
				interviewSetDto.interviewData[i].userResponse
			);
			strarr.push(str);
		}
		return strarr;
	}
}

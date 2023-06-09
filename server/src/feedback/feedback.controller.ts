import { Body, Controller, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { UserCodeListDto } from './dto/usercode-list.dto';
import axios from 'axios';
import { CodeFeedbackSetDto } from './dto/codefeedback-set.dto';
import { CodeFeedbackDto } from './dto/codefeedback.dto';
import { InterviewSetDto } from './dto/interview-set.dto';
import { InterviewFeedbackDto } from './dto/interview-feedback.dto';
import { InterviewFeedbackSetDto } from './dto/interview-feedback-set.dto';

@Controller('feedback')
export class FeedbackController {
	constructor(private readonly feedbackService: FeedbackService) {}

	// Experimental Code
	@Get('coding-test/trial')
	async codingTestCompletionTrial() {
		const str = this.feedbackService.getCodeEvaluation('this is a code sent to GPT.');
		return str;
	}

	@Get('api/submissions/coding-test-completion') //@Get('coding-test/completion')
	async codingTestCompletion(@Body() userCodeListDto: UserCodeListDto) {
		const codeFeedbackDtoArray: CodeFeedbackDto[] = new Array(
			userCodeListDto.userCodeList.length
		);

		const strarr = new Array(userCodeListDto.userCodeList.length);
		for (let i = 0; userCodeListDto.userCodeList.length; i++) {
			const codeFeedbackDto: CodeFeedbackDto = {
				problemNo: i + 1,
				language: userCodeListDto.userCodeList[i].language,
				userCode: userCodeListDto.userCodeList[i].userCode,
				readability: await this.feedbackService.getCodeEvaluationWithType(
					userCodeListDto.userCodeList[i].userCode,
					'readability'
				),
				timeComplexity: await this.feedbackService.getCodeEvaluationWithType(
					userCodeListDto.userCodeList[i].userCode,
					'timeComplexity'
				),
				improvedCode: await this.feedbackService.getCodeEvaluationWithType(
					userCodeListDto.userCodeList[i].userCode,
					'improvement'
				),
			};
			codeFeedbackDtoArray.push(codeFeedbackDto);
		}

		const codeFeedbackSetDto: CodeFeedbackSetDto = {
			results: codeFeedbackDtoArray,
			analysis: await this.feedbackService.getAnswerForString(
				'Give us an overall analysis of the submitted codes.'
			),
			feedback: await this.feedbackService.getAnswerForString(
				'Give us an overall feedback of the submitted codes.'
			),
		};

		axios.post('http://localhost:3000/mockAPI/resultData.json', codeFeedbackSetDto); // Experimental

		return strarr;
	}

	@Get('coding-test/interview') // api/endpoint/면접-응답-제출
	async interviewProblem(@Body() interviewSetDto: InterviewSetDto) {
		const interviewFeedbackDtoArray: InterviewFeedbackDto[] = new Array(
			interviewSetDto.interviewData.length
		);

		for (let i = 0; interviewSetDto.interviewData.length; i++) {
			const interviewFeedbackDto: InterviewFeedbackDto = {
				problemNo: i + 1,
				feedback: await this.feedbackService.getInterviewFeedback(
					interviewSetDto.interviewData[i].description,
					interviewSetDto.interviewData[i].userResponse
				),
			};
			interviewFeedbackDtoArray.push(interviewFeedbackDto);
		}

		const interviewFeedbackSetDto: InterviewFeedbackSetDto = {
			interviewData: interviewFeedbackDtoArray,
		};

		axios.post('http://localhost:3000/mockAPI/feedbackData.json', interviewFeedbackSetDto); // Experimental
	}
}

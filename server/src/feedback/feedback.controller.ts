import { Body, Controller, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CodingTestDto } from './dto/coding-test.dto';

@Controller('feedback')
export class FeedbackController {
	constructor(private readonly feedbackService: FeedbackService) {}

	@Get('coding-test/completion')
	async codingTestCompletion(@Body() codingTestDto: CodingTestDto) {
		for (let i = 0; codingTestDto.problem.length; i++) {
			const str = this.feedbackService.getCodeEvaluation(codingTestDto.problem[i].code);
			console.log(str);
		}
	}

	@Get('coding-test/trial') // Experimental Code
	async codingTestCompletionTrial() {
		const str = this.feedbackService.getCodeEvaluation('this is a code.');
		console.log(str);
	}
}

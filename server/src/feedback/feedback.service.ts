import { Injectable } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Injectable()
export class FeedbackService {
	constructor(private readonly openaiService: OpenaiService) {}

	getCodeEvaluation(code: string) {
		return this.getCodeEvaluationWithType(code, 'general');
	}

	getCodeEvaluationWithType(code: string, resultType: string) {
		let str: string;
		switch (resultType) {
			case 'readability':
				str = 'How is the readability of the follwing code?\n\n' + code;
			case 'timeComplexity':
				str = 'How is the time complexity of the follwing code?\n\n' + code;
			case 'improvement':
				str = 'How can the following code be improved?\n\n' + code;
			case 'analysis':
				str = 'Can you breifly give us an analysis of the following code?\n\n' + code;
			case 'feedback':
				str = 'Can you breifly give us a feedback of the following code?\n\n' + code;
			default:
				str = code;
		}
		return this.openaiService.sendToChatGPT(str);
	}
}

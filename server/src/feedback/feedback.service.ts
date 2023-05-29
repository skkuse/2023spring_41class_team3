import { Injectable } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Injectable()
export class FeedbackService {
	constructor(private readonly openaiService: OpenaiService) {}
	getCodeEvaluation(code: string) {
		return this.openaiService.sendToChatGPT(code);
	}
}

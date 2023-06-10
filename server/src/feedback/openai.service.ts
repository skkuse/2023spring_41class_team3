import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChatGPTAPI } from 'chatgpt';
import { OPENAI_API_OPTIONS } from '../constant/openai.constant';

@Injectable()
export class OpenaiService {
	constructor(private readonly configService: ConfigService) {}

	// Experimental Code
	async sendExampleToChatGPT() {
		const api = new ChatGPTAPI(OPENAI_API_OPTIONS);
		const res = await api.sendMessage('Hello World!');
		return res.text;
	}

	async sendToChatGPT(message: string) {
		const api = new ChatGPTAPI(OPENAI_API_OPTIONS);
		const res = await api.sendMessage(message);
		return res.text;
	}

	async sendToChatGPTWithParentMessage(message: string, id: string) {
		const api = new ChatGPTAPI(OPENAI_API_OPTIONS);
		//  id comes from 'res.id', where 'res' is the result of 'await api.sendMessage(message)'
		const res = await api.sendMessage(message, {
			parentMessageId: id,
		});
		return res.text;
	}
}

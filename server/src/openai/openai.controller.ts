import { Controller, Delete, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { ChatGPTAPI } from 'chatgpt';

@Controller('openai')
export class OpenaiController {}

async function sendExampleToChatGPT() {
	const api = new ChatGPTAPI({
		apiKey: process.env.OPENAI_API_KEY,
		completionParams: {
			model: 'gpt-4',
			temperature: 0.5,
			top_p: 0.8,
		},
	});

	const res = await api.sendMessage('Hello World!');
	console.log(res.text);

	return res;
}

async function sendToChatGPT(message: string) {
	const api = new ChatGPTAPI({
		apiKey: process.env.OPENAI_API_KEY,
		completionParams: {
			model: 'gpt-4',
			temperature: 0.5,
			top_p: 0.8,
		},
	});

	const res = await api.sendMessage(message);
	console.log(res.text);

	return res;
}

async function sendToChatGPTWithParentMessage(message: string, id: string) {
	const api = new ChatGPTAPI({
		apiKey: process.env.OPENAI_API_KEY,
		completionParams: {
			model: 'gpt-4',
			temperature: 0.5,
			top_p: 0.8,
		},
	});

	//  id comes from 'res.id', where 'res' is the result of 'await api.sendMessage(message)'
	const res = await api.sendMessage(message, {
		parentMessageId: id,
	});

	console.log(res.text);

	return res;
}

import { ChatGPTAPIOptions } from 'chatgpt';

export const OPENAI_API_MODEL = 'gpt-3.5';
export const OPENAI_API_TEMPERATURE = 0.5;
export const OPENAI_API_TOP_P = 0.8;

export const OPENAI_API_OPTIONS: ChatGPTAPIOptions = {
	apiKey: process.env.OPENAI_API_KEY,
	completionParams: {
		model: OPENAI_API_MODEL,
		temperature: OPENAI_API_TEMPERATURE,
		top_p: OPENAI_API_TOP_P,
	},
};

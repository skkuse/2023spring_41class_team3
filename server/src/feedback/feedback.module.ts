import { ConfigService } from '@nestjs/config';
import { FeedbackController } from './feedback.controller';
import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { FeedbackService } from './feedback.service';

@Module({
	imports: [],
	controllers: [FeedbackController],
	providers: [ConfigService, FeedbackService, OpenaiService],
})
export class FeedbackModule {}

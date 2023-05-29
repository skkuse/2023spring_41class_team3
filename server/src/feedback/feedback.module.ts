import { ConfigService } from '@nestjs/config';
import { FeedbackController } from './feedback.controller';
import { Module } from '@nestjs/common';

@Module({
	imports: [],
	controllers: [FeedbackController],
	providers: [ConfigService],
})
export class FeedbackModule {}

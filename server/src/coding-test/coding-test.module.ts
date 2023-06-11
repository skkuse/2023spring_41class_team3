import { Module } from '@nestjs/common';
import { CodingTestService } from './service/coding-test.service';
import { CodingTestController } from './controller/coding-test.controller';

@Module({
	controllers: [CodingTestController],
	providers: [CodingTestService],
})
export class CodingTestModule {}

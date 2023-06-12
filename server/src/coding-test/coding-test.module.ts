import { Module } from '@nestjs/common';
import { CodingTestService } from './service/coding-test.service';
import { CodingTestController } from './controller/coding-test.controller';
import { ProblemModule } from 'src/problem/problem.module';

@Module({
	imports: [ProblemModule],
	controllers: [CodingTestController],
	providers: [CodingTestService],
})
export class CodingTestModule {}

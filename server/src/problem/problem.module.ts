import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemSchema } from './entities/problem.entity';
import { ProblemRepository } from './repository/problem.repository';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Problem', schema: ProblemSchema }])],
	controllers: [ProblemController],
	providers: [ProblemService, ProblemRepository],
})
export class ProblemModule {}

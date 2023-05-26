import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemMetadataSchema } from './entities/problem.entity';
import { ProblemRepository } from './repository/problem.repository';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'ProblemMetadata', schema: ProblemMetadataSchema }]),
	],
	controllers: [ProblemController],
	providers: [ProblemService, ProblemRepository],
})
export class ProblemModule {}

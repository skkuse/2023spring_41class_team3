import { ClassProvider, Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './entities/cat.entity';
import { MongoCatRepository } from './mongo.cat.repository';

export const CatRepository: ClassProvider = {
	provide: 'CatRepository',
	useClass: MongoCatRepository,
};

@Module({
	imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
	controllers: [CatController],
	providers: [CatService, CatRepository],
})
export class CatModule {}

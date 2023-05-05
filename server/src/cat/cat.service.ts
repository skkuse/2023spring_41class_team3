import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
	@Inject('CatRepository') private readonly catRepository: any;

	create(createCatDto: CreateCatDto) {
		return this.catRepository.create(createCatDto);
	}

	findAll() {
		return `This action returns all cat`;
	}

	findOne(id: number) {
		return `This action returns a #${id} cat`;
	}

	update(id: number, updateCatDto: UpdateCatDto) {
		return `This action updates a #${id} cat`;
	}

	remove(id: number) {
		return `This action removes a #${id} cat`;
	}
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './entities/cat.entity';
import { Model } from 'mongoose';

@Injectable()
export class MongoCatRepository {
	constructor(@InjectModel(Cat.name) private readonly catModel: Model<CatDocument>) {}

	async create(cat: Cat): Promise<Cat> {
		const createdCat = new this.catModel(cat);
		return createdCat.save();
	}

	async findAll(): Promise<Cat[]> {
		return this.catModel.find().exec();
	}

	async findOne(name: string): Promise<Cat> {
		return this.catModel.findById(name).exec();
	}

	async update(name: string, cat: Cat): Promise<Cat> {
		return this.catModel.findByIdAndUpdate(name, cat).exec();
	}

	async remove(name: string): Promise<Cat> {
		return this.catModel.findByIdAndDelete(name).exec();
	}
}

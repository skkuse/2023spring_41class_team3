import { Controller } from '@nestjs/common';
import { CodingTestService } from '../service/coding-test.service';

@Controller('coding-test')
export class CodingTestController {
	constructor(private readonly codingTestService: CodingTestService) {}
}

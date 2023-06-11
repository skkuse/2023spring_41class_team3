import { Injectable } from '@nestjs/common';
import { TestInitDto } from '../dto/testInit.dto';
import { PS_UNIT_TIME } from '@constant';
import { Observable } from 'rxjs';
import { v4 } from 'uuid';

@Injectable()
export class CodingTestService {
	private testTimeMap = new Map<string, number>();

	initiateTest(testInitDto: TestInitDto) {
		const { difficulty, number } = testInitDto;
		const testTime = difficulty * number * PS_UNIT_TIME;
		const testId = v4();
		this.testTimeMap.set(testId, testTime);
		return testId;
	}
}

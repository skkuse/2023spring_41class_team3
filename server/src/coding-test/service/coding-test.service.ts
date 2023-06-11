import { Injectable } from '@nestjs/common';
import { TestInitDto } from '../dto/testInit.dto';
import { PS_UNIT_TIME } from '@constant';

@Injectable()
export class CodingTestService {
	private terminateTestMap = new Map<number, string[]>();

	initiateTest(userId: string, initTime: number, testInitDto: TestInitDto) {
		const { difficulty, number } = testInitDto;
		const testTime = difficulty * number * PS_UNIT_TIME;
		const terminateTime = initTime + testTime;
		if (this.terminateTestMap.has(terminateTime)) {
			this.terminateTestMap.get(terminateTime).push(userId);
		} else {
			this.terminateTestMap.set(terminateTime, [userId]);
		}
	}
}

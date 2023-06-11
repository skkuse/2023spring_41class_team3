import { BadRequestException, Injectable } from '@nestjs/common';
import { TestInitDto } from '../dto/testInit.dto';
import { HttpExceptionMsg, PS_UNIT_TIME } from '@constant';
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

	terminateTest(testId: string): Observable<MessageEvent> {
		return new Observable((observer) => {
			const testTime = this.testTimeMap.get(testId);

			if (!testTime) {
				throw new BadRequestException(HttpExceptionMsg.INVALID_CODING_TEST_ID);
			}

			setTimeout(() => {
				observer.next({ data: { terminate: true } } as MessageEvent);
			}, testTime);
			this.testTimeMap.delete(testId);
		});
	}
}

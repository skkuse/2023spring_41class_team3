import { BadRequestException, Injectable } from '@nestjs/common';
import { TestInitDto } from '../dto/testInit.dto';
import { HttpExceptionMsg, PS_UNIT_TIME } from '@constant';
import { Observable } from 'rxjs';
import { v4 } from 'uuid';
import { ProblemService } from 'src/problem/problem.service';
import { ProblemResponseDto } from 'src/problem/dto/problemResponse.dto';

@Injectable()
export class CodingTestService {
	constructor(private readonly problemService: ProblemService) {}

	private userTestMap = new Map<string, string>();
	private testTerminateTimeMap = new Map<string, number>();
	private testProblemListMap = new Map<string, ProblemResponseDto[]>();

	async initiateTest(userId: string, testInitDto: TestInitDto) {
		let problemList: ProblemResponseDto[], testId: string, remainTime: number;
		if (this.userTestMap.has(userId)) {
			testId = this.userTestMap.get(userId);
			problemList = this.testProblemListMap.get(testId);
			remainTime = this.testTerminateTimeMap.get(testId) - Date.now();
		} else {
			testId = v4();
			problemList = await this.problemService.getTestProblemList(testInitDto);
			const { difficulty, number } = testInitDto;
			remainTime = difficulty * number * PS_UNIT_TIME;

			this.userTestMap.set(userId, testId);
			this.testTerminateTimeMap.set(testId, Date.now() + remainTime);
			this.testProblemListMap.set(testId, problemList);
		}

		return { problemList, testId, remainTime };
	}

	terminateTest(userId: string, testId: string): Observable<MessageEvent> {
		return new Observable((observer) => {
			const testTime = this.testTerminateTimeMap.get(testId);

			if (!testTime) {
				throw new BadRequestException(HttpExceptionMsg.INVALID_CODING_TEST_ID);
			}

			setTimeout(() => {
				observer.next({ data: { terminate: true } } as MessageEvent);
				this.userTestMap.delete(userId);
				this.testTerminateTimeMap.delete(testId);
				this.testProblemListMap.delete(testId);
			}, this.testTerminateTimeMap.get(testId) - Date.now());
		});
	}
}

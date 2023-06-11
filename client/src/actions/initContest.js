/*

- 난이도
- 문제 수
- 제한 시간

*/
import axios from 'axios';
import {
	CONTEST_DIFFICULTY,
	CONTEST_PROBLEM_NUM,
	CONTEST_TIME_LIMIT,
} from 'constant/state.constant';
import { useDispatch } from 'react-redux';

// 난이도, 문제 수 post 하고 response 로 제한 시간 받음
export function initContest(contestData) {
	const dispatch = useDispatch();
	axios
		.post('코테데이터 엔드포인트', contestData)
		.then((response) => {
			dispatch(setTimeLimit(response.timeLimit));
		})
		.catch(() => {
			dispatch(setTimeLimit(100000));
		});
}

// 난이도
export function setDifficulty(difficulty) {
	return {
		type: CONTEST_DIFFICULTY,
		payload: difficulty,
	};
}

// 문제 수
export function setProblemNum(num) {
	return {
		type: CONTEST_PROBLEM_NUM,
		payload: num,
	};
}

// 제한 시간
export function setTimeLimit(timeLimit) {
	return {
		type: CONTEST_TIME_LIMIT,
		payload: timeLimit,
	};
}

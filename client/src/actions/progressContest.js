/*

- 문제 정보
- 문제 번호
- 문제 설명
- 테스트케이스
- 코드
- 문제 풀이
- 언어
- 에디터 테마

*/
import axios from 'axios';
import {
	PROGRESS_FOCUS_NO,
	PROGRESS_PROBLEM_SET,
	PROGRESS_SET_LANGUAGE,
	PROGRESS_SET_THEME,
	PROGRESS_UPDATE_USERCODE,
} from 'constant/state.constant';
import { useDispatch } from 'react-redux';

// 서버에서 코딩 테스트 문제 정보 받기
export function fetchContestProblems(difficulty, num) {
	const dispatch = useDispatch();

	axios
		.get(`/api/problem?difficulty=${difficulty}&num=${num}`)
		.get('http://localhost:3000/mockAPI/contestProblems.json')
		.then((response) => {
			console.log('Fetch success!!', response.data.problemInfo);
			dispatch(setProblems(response.data.problemInfo));
		})
		.catch((error) => {
			console.log('Failed to fetch contest data, ', error.message);
		});
}

// 테스트 완료 시 정보 전송
export function sendContestData(contestData) {
	console.log(contestData);
	return () => {
		axios
			.post('api/submissions/코드전송엔드포인트', contestData)
			.then((response) => {
				alert('Successfully sent ', response);
			})
			.catch((error) => {
				alert(`Failed to send ${error.message}`);
			});
	};
}

// 문제 정보 입력 (미완성)
export function setProblems(problemInfo) {
	return {
		type: PROGRESS_PROBLEM_SET,
		payload: problemInfo,
	};
}

// 문제 풀 언어 선택
export function setLanguage(focusNo, language) {
	return {
		type: PROGRESS_SET_LANGUAGE,
		payload: { focusNo, language },
	};
}

// 에디터 테마 선택
export function setTheme(theme) {
	return {
		type: PROGRESS_SET_THEME,
		payload: theme,
	};
}

// 문제 번호 선택
export function setFocusNo(num) {
	return {
		type: PROGRESS_FOCUS_NO,
		payload: num,
	};
}

// 유저 코드 저장
export function setUserCode(focusNo, userCode) {
	return {
		type: PROGRESS_UPDATE_USERCODE,
		payload: { focusNo, userCode },
	};
}

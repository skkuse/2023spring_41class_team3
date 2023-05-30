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

export function fetchProblems() {
	return (dispatch) => {
		axios
			.get('문제 데이터')
			.then((response) => {
				dispatch(setProblems(response.problemData));
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
}

export function sendContestData(contestData) {
	return () => {
		axios
			.post('~', contestData)
			.then((response) => {
				alert('Successfully sent ', response);
			})
			.catch((error) => {
				alert(`Failed to send ${error.message}`);
			});
	};
}

// 문제 정보 입력 (미완성)
export function setProblems(problemInfos) {
	return {
		type: 'PROGRESS_PROBLEM_SET',
		payload: problemInfos,
	};
}

// 문제 풀 언어 선택
export function setLanguage(focusNo, language) {
	return {
		type: 'PROGRESS_SET_LANGUAGE',
		payload: { focusNo, language },
	};
}

// 에디터 테마 선택
export function setTheme(theme) {
	return {
		type: 'PROGRESS_SET_THEME',
		payload: theme,
	};
}

// 문제 번호 선택
export function setFocusNo(num) {
	return {
		type: 'PROGRESS_FOCUS_NO',
		payload: num,
	};
}

// 유저 코드 저장
export function setUserCode(focusNo, userCode) {
	return {
		type: 'PROGRESS_UPDATE_USERCODE',
		payload: { focusNo, userCode },
	};
}

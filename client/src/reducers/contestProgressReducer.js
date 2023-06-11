import {
	PROGRESS_FOCUS_NO,
	PROGRESS_PROBLEM_SET,
	PROGRESS_SET_LANGUAGE,
	PROGRESS_SET_THEME,
	PROGRESS_UPDATE_USERCODE,
} from 'constant/state.constant';

const initialState = {
	// 테스트 진행 정보
	focusNo: 1,
	// 문제 정보
	problemInfo: [
		{
			// 문제 id
			id: '123123',
			// 제목
			title: 'Initial problem title1',
			// 설명
			description: '',
			// 제한
			constraint: [],
			// 테스트 케이스
			testcases: [
				{
					input: '1 2 2',
					output: '5',
				},
			],
		},
	],
	// 문제 풀이 정보
	solveInfo: [
		{
			// 문제 번호
			problemNo: 1,
			// 언어 선택
			language: 'c',
			// 작성한 코드
			userCode: '#include <bits/stdc++.h>\n\nint main() {\n\t\n\treturn 0;\n}\n',
		},
		{
			problemNo: 2,
			language: 'c',
			userCode: '',
		},
		{
			problemNo: 3,
			language: 'c',
			userCode: '',
		},
		{
			problemNo: 4,
			language: 'c',
			userCode: '',
		},
		{
			problemNo: 5,
			language: 'c',
			userCode: '',
		},
	],
	// 에디터 테마 선택
	theme: 'vs-dark',
};

function contestProgressReducer(state = initialState, action) {
	switch (action.type) {
		// 초기 문제 설정
		case PROGRESS_PROBLEM_SET:
			return {
				...state,
				problemInfo: action.payload,
			};

		// 코드 자동 저장
		case PROGRESS_UPDATE_USERCODE: {
			const { focusNo, userCode } = action.payload;
			const updatedSolveInfo = state.solveInfo.map((solve, index) => {
				if (index === focusNo - 1) {
					return { ...solve, userCode };
				}
				return solve;
			});
			return {
				...state,
				solveInfo: updatedSolveInfo,
			};
		}

		// 문제 선택
		case PROGRESS_FOCUS_NO:
			return {
				...state,
				focusNo: action.payload,
			};

		// 언어 변경
		case PROGRESS_SET_LANGUAGE: {
			const { focusNo, language } = action.payload;
			const updatedSolveInfo = state.solveInfo.map((solve, index) => {
				if (index === focusNo - 1) {
					return { ...solve, language };
				}
				return solve;
			});
			return {
				...state,
				solveInfo: updatedSolveInfo,
			};
		}

		// 테마 변경
		case PROGRESS_SET_THEME:
			return {
				...state,
				theme: action.payload,
			};

		default:
			return state;
	}
}

export default contestProgressReducer;

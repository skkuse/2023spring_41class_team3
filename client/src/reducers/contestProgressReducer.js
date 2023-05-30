const initialState = {
	// 테스트 진행 정보
	contestProgress: {
		// 랜더링할 문제
		focusNo: 1,
		// 문제 정보
		problemInfo: [
			{
				// 문제 번호
				problemNo: 1,
				// 문제 Id
				id: 123123,
				// 문제 설명
				description: '',
				// 테스트 케이스
				testcases: [
					{
						input: '',
						output: '',
					},
				],
				// 언어 선택
				language: 'c',
				// 작성한 코드
				userCode: '',
			},
			{
				// 문제 번호
				problemNo: 2,
				// 문제 Id
				id: 623634,
				// 문제 설명
				description: '',
				// 테스트 케이스
				testcases: [
					{
						input: '',
						output: '',
					},
				],
				// 언어 선택
				language: 'python',
				// 작성한 코드
				userCode: '',
			},
		],
		// 에디터 설정
		editorInfo: {
			// 테마 선택
			theme: 'vs-dark',
		},
	},
};

function contestProgressReducer(state = initialState, action) {
	switch (action.type) {
		// ------- 문제 설정 -------
		// 초기 문제 설정 (구현 필요)
		case 'PROGRESS_PROBLEM_SET':
			return {
				...state,
				contestProgress: {
					...state.contestProgress,
					problemInfo: action.payload,
				},
			};

		// 코드 자동 저장
		case 'PROGRESS_UPDATE_USERCODE': {
			const { focusNo, userCode } = action.payload;
			const updatedProblemInfo = state.contestProgress.problemInfo.map((problem, index) => {
				if (index === focusNo - 1) {
					return { ...problem, userCode };
				}
				return problem;
			});
			return {
				...state,
				contestProgress: {
					...state.contestProgress,
					problemInfo: updatedProblemInfo,
				},
			};
		}

		// 문제 선택
		case 'PROGRESS_FOCUS_NO':
			return {
				...state,
				contestProgress: {
					...state.contestProgress,
					focusNo: action.payload,
				},
			};

		// 언어 변경
		case 'PROGRESS_SET_LANGUAGE': {
			const { focusNo, language } = action.payload;
			const updatedProblemInfo = state.contestProgress.problemInfo.map((problem, index) => {
				if (index === focusNo - 1) {
					return { ...problem, language };
				}
				return problem;
			});
			return {
				...state,
				contestProgress: {
					...state.contestProgress,
					problemInfo: updatedProblemInfo,
				},
			};
		}
		// ------- 에디터 설정 -------
		// 테마 변경
		case 'PROGRESS_SET_THEME':
			return {
				...state,
				contestProgress: {
					...state.contestProgress,
					editorInfo: {
						...state.contestProgress.editorInfo,
						theme: action.payload,
					},
				},
			};

		default:
			return state;
	}
}

export default contestProgressReducer;

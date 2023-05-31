const initialState = {
	// 코딩 테스트 정보
	// 난이도
	difficulty: 1,
	// 문제 수
	problemNum: 5,
	// 제한 시간 (단위: ms)
	timeLimit: 100000,
};

function initContestReducer(state = initialState, action) {
	switch (action.type) {
		case 'CONTEST_DIFFICULTY':
			return {
				...state,
				difficulty: action.payload,
			};
		case 'CONTEST_PROBLEM_NUM':
			return {
				...state,
				problemNum: action.payload,
			};
		case 'CONTEST_TIME_LIMIT':
			return {
				...state,
				timeLimit: action.payload,
			};
		default:
			return state;
	}
}

export default initContestReducer;

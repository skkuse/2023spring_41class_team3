const initialState = {
	// 코딩 테스트 정보
	contestSetting: {
		// 난이도
		difficulty: 1,
		// 문제 수
		problemNum: 2,
		// 제한 시간 (단위: ms)
		timeLimit: 100000,
	},
};

function contestSettingReducer(state = initialState, action) {
	switch (action.type) {
		case 'CONTEST_DIFFICULTY':
			return {
				...state,
				contestSetting: {
					...state.contestSetting,
					difficulty: action.payload,
				},
			};
		case 'CONTEST_PROBLEM_NUM':
			return {
				...state,
				contestSetting: {
					...state.contestSetting,
					problemNum: action.payload,
				},
			};
		case 'CONTEST_TIME_LIMIT':
			return {
				...state,
				contestSetting: {
					...state.contestSetting,
					timeLimit: action.payload,
				},
			};
		default:
			return state;
	}
}

export default contestSettingReducer;

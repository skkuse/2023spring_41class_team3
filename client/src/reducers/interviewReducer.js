const initialState = {
	// 선택한 문제 번호
	focusNo: 1,
	// 면접 질문 정보
	interviewProblems: [
		{
			problemNo: 1,
			description: '',
			userResponse: '',
		},
		{
			problemNo: 2,
			description: '',
			userResponse: '',
		},
		{
			problemNo: 3,
			description: '',
			userResponse: '',
		},
		{
			problemNo: 4,
			description: '',
			userResponse: '',
		},
		{
			problemNo: 5,
			description: '',
			userResponse: '',
		},
	],
};

function interviewReducer(state = initialState, action) {
	switch (action.type) {
		// 서버로부터 받은 문제 상태 저장
		case 'INTERVIEW_SET_PROBLEMS':
			return {
				...state,
				interviewProblems: action.payload,
			};

		// 문제 번호 선택
		case 'INTERVIEW_FOCUS_NO':
			return {
				...state,
				focusNo: action.payload,
			};

		// 유저 응답 저장
		case 'INTERVIEW_UPDATE_RESPONSE': {
			const { focusNo, userResponse } = action.payload;
			const updatedInterviewProblem = state.interviewProblems.map((problem, index) => {
				if (index === focusNo - 1) {
					return { ...problem, userResponse };
				}
				return problem;
			});
			return {
				...state,
				interviewProblems: updatedInterviewProblem,
			};
		}
		default:
			return state;
	}
}

export default interviewReducer;

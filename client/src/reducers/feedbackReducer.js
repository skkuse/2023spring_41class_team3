import { FEEDBACK_DATA, FEEDBACK_FOCUS_NO } from 'constant/state.constant';

const initialState = {
	// 선택한 문제 번호
	focusNo: 1,
	// 면접 질문 정보
	feedbackData: [
		{
			problemNo: 1,
			feedback: '',
		},
		{
			problemNo: 2,
			feedback: '',
		},
		{
			problemNo: 3,
			feedback: '',
		},
		{
			problemNo: 4,
			feedback: '',
		},
		{
			problemNo: 5,
			feedback: '',
		},
	],
};

function feedbackReducer(state = initialState, action) {
	switch (action.type) {
		// 서버로부터 받은 문제 상태 저장
		case FEEDBACK_DATA:
			return {
				...state,
				feedbackData: action.payload,
			};

		// 문제 번호 선택
		case FEEDBACK_FOCUS_NO:
			return {
				...state,
				focusNo: action.payload,
			};
		default:
			return state;
	}
}

export default feedbackReducer;

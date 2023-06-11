import {
	RESULT_FETCH,
	RESULT_FETCH_ANALYSIS,
	RESULT_FETCH_FEEDBACK,
	RESULT_FOCUS_NO,
	RESULT_FOCUS_TYPE,
} from 'constant/state.constant';

const initialState = {
	// 표시할 문제 번호
	focusNo: 1,
	// 표시할 결과 타입
	focusType: 'readability',
	// 결과 정보
	results: [
		{
			// 문제 번호
			problemNo: 1,
			// 제출한 언어
			language: 'c',
			// 제출 코드
			userCode: '',
			// 가독성
			readability: '',
			// 시간 복잡도
			timeComplexity: '',
			// 개선 코드
			improvedCode: '',
		},
		{
			problemNo: 2,
			language: 'cpp',
			userCode: '',
			readability: '',
			timeComplexity: '',
			improvedCode: '',
		},
	],
	// 분석
	analysis: '',
	// 피드백
	feedback: '',
};

function resultReducer(state = initialState, action) {
	switch (action.type) {
		// 문제 번호 선택
		case RESULT_FOCUS_NO:
			return {
				...state,
				focusNo: action.payload,
			};
		// 화면에 표시할 결과 선택
		case RESULT_FOCUS_TYPE:
			return {
				...state,
				focusType: action.payload,
			};
		// 서버로부터 받은 결과 저장
		case RESULT_FETCH:
			return {
				...state,
				results: action.payload,
			};
		case RESULT_FETCH_ANALYSIS:
			return {
				...state,
				analysis: action.payload,
			};
		case RESULT_FETCH_FEEDBACK:
			return {
				...state,
				feedback: action.payload,
			};
		default:
			return state;
	}
}

export default resultReducer;

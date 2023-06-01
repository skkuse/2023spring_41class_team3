import axios from 'axios';
import {
	RESULT_FETCH,
	RESULT_FETCH_ANALYSIS,
	RESULT_FETCH_FEEDBACK,
	RESULT_FOCUS_NO,
	RESULT_FOCUS_TYPE,
} from 'constant/state.constant';
import { useDispatch } from 'react-redux';

// 서버에서 fetch
export function fetchResults() {
	const dispatch = useDispatch();

	axios
		.get('http://localhost:3000/mockAPI/resultData.json')
		.then((response) => {
			dispatch(setResult(response.data.results));
			dispatch(setAnalysis(response.data.analysis));
			dispatch(setFeedback(response.data.feedback));
		})
		.catch((error) => {
			console.log('Failed to fetch result data, ', error.message);
		});
}

// 서버로부터 받은 결과 저장
export function setResult(results) {
	return {
		type: RESULT_FETCH,
		payload: results,
	};
}
export function setAnalysis(analysis) {
	return {
		type: RESULT_FETCH_ANALYSIS,
		payload: analysis,
	};
}
export function setFeedback(feedback) {
	return {
		type: RESULT_FETCH_FEEDBACK,
		payload: feedback,
	};
}

export function setResultFocusNo(num) {
	return {
		type: RESULT_FOCUS_NO,
		payload: num,
	};
}

export function setResultFocusType(type) {
	return {
		type: RESULT_FOCUS_TYPE,
		payload: type,
	};
}

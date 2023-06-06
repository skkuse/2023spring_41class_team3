import axios from 'axios';
import { FEEDBACK_DATA, FEEDBACK_FOCUS_NO } from 'constant/state.constant';
import { useDispatch } from 'react-redux';

// 서버에서 피드백 데이터 받아오기
export function fetchFeedbackData() {
	const dispatch = useDispatch();

	axios
		.get('http://localhost:3000/mockAPI/feedbackData.json')
		.then((response) => {
			dispatch(setFeedbackData(response.data.feedbackData));
		})
		.catch((error) => {
			alert(error.message);
		});
}

// 문제 상태 저장
export function setFeedbackData(feedbackData) {
	return {
		type: FEEDBACK_DATA,
		payload: feedbackData,
	};
}

// 문항 선택
export function setFeedbackFocusNo(num) {
	return {
		type: FEEDBACK_FOCUS_NO,
		payload: num,
	};
}

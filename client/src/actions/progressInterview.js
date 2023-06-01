import axios from 'axios';
import {
	INTERVIEW_FOCUS_NO,
	INTERVIEW_SET_PROBLEMS,
	INTERVIEW_UPDATE_RESPONSE,
} from 'constant/state.constant';
import { useDispatch } from 'react-redux';

// 서버에서 면접 문제 받기
export function fetchInterviewProblems() {
	const dispatch = useDispatch();

	axios
		.get('http://localhost:3000/mockAPI/interviewProblems.json')
		.then((response) => {
			dispatch(setInterviewProblems(response.data.interviewProblems));
		})
		.catch((error) => {
			console.log('Failed to fetch interview data, ', error.message);
		});
}

// 서버로 사용자 응답 제출
export function sendInterviewResponse(interviewResponses) {
	axios
		.post('api/endpoint/면접-응답-제출', interviewResponses)
		.then((response) => {
			console.log('Successfully sent, ', response);
		})
		.catch((error) => {
			console.log('Failed to send ', error.message);
		});
}

// 문제 상태 저장
export function setInterviewProblems(interviewProblems) {
	return {
		type: INTERVIEW_SET_PROBLEMS,
		payload: interviewProblems,
	};
}

// 문항 선택
export function setInterviewFocusNo(num) {
	return {
		type: INTERVIEW_FOCUS_NO,
		payload: num,
	};
}

// 사용자 응답 자동 저장
export function setUserResponse(focusNo, userResponse) {
	return {
		type: INTERVIEW_UPDATE_RESPONSE,
		payload: { focusNo, userResponse },
	};
}

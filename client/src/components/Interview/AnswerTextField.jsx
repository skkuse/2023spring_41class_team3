/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setUserResponse } from 'actions/progressInterview';

function AnswerTextField() {
	const dispatch = useDispatch();

	const { focusNo } = useSelector((state) => state.interviewProgress);
	const { userResponse } = useSelector(
		(state) => state.interviewProgress.interviewProblems[focusNo - 1]
	);

	function saveResponse(event) {
		dispatch(setUserResponse(focusNo, event.target.value));
	}

	return (
		<TextField
			fullWidth
			label="Answer"
			variant="outlined"
			multiline
			minRows={2}
			maxRows={2}
			margin="normal"
			placeholder="답을 입력하세요"
			value={userResponse}
			onChange={saveResponse}
		/>
	);
}

export default AnswerTextField;

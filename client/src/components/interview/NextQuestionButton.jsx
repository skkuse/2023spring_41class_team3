import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { sendInterviewResponse } from 'actions/progressInterview';

function NextQuestionButton() {
	const userResponseList = useSelector((state) =>
		state.interviewProgress.interviewProblems.map((problem) => problem.userResponse)
	);

	function submitInterview() {
		sendInterviewResponse(userResponseList);
	}

	return (
		<ThemeProvider theme={theme}>
			<Button
				onClick={submitInterview}
				style={{ marginTop: '5px' }}
				variant="contained"
				color="primary"
				size="medium"
			>
				<span style={{ fontWeight: 'bold' }}>다음 질문</span>
			</Button>
		</ThemeProvider>
	);
}

export default NextQuestionButton;

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

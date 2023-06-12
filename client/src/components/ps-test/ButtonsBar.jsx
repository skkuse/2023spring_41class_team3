import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { sendContestData } from 'actions/progressContest';
import { useNavigate } from 'react-router-dom';

function ButtonsBar() {
	const userCodeList = useSelector((state) =>
		state.contestProgress.problemInfo.map((item) => ({
			problemId: item.id,
			userCode: item.userCode,
			language: item.language,
		}))
	);

	const navigate = useNavigate();

	const navigateToResult = () => {
		navigate('/result');
	};

	// 최종 제출
	function submitCode() {
		sendContestData(userCodeList);
		navigateToResult();
	}

	return (
		<ButtonsWrapper>
			<ThemeProvider theme={theme}>
				<Button onClick={submitCode} variant="contained" color="primary" size="medium">
					<BoldSpan>제출</BoldSpan>
				</Button>
				<Button style={{ margin: '0 auto 0 0' }} variant="outlined">
					<BoldSpan>Run Code</BoldSpan>
				</Button>
			</ThemeProvider>
		</ButtonsWrapper>
	);
}

export default ButtonsBar;

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

const ButtonsWrapper = styled.div`
	margin-top: 2%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;

const BoldSpan = styled.span`
	font-weight: bold;
`;

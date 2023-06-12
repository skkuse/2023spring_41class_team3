import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { sendContestData } from 'actions/progressContest';
import axios from 'axios';

function ButtonsBar() {
	const userCodeList = useSelector((state) =>
		state.contestProgress.problemList.map((item) => ({
			problemId: item.id,
			userCode: item.userCode,
			language: item.language,
		}))
	);

	async function runCode() {
		const body = {}; // selector 사용해서 { code, language, testcases } 형태로 보내야 함
		const config = { 'Content-Type': 'application/json' };
		const res = await axios.post('/api/problem/test', body, config);
		// const { code, run, caseResultList, message } = res.data;
		const { run } = res.data;
		if (run === true) {
			// TODO caseResultList를 이용하여 테스트 케이스 결과를 출력 (성공, 실패, 시간 초과 등)
		} else {
			// TODO message를 이용하여 오류 메시지 출력 (syntax error 등)
		}
	}

	// 최종 제출
	function submitCode() {
		sendContestData(userCodeList);
	}

	return (
		<ButtonsWrapper>
			<ThemeProvider theme={theme}>
				<Button onClick={submitCode} variant="contained" color="primary" size="medium">
					<BoldSpan>제출</BoldSpan>
				</Button>
				<Button onClick={runCode} style={{ margin: '0 auto 0 0' }} variant="outlined">
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

import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useRunTestCode from 'hooks/problemSoving';
import convertToEscapedString from 'utils/problem';

function ButtonsBar({ setTestResult }) {
	const runTestCode = useRunTestCode();
	const { focusNo } = useSelector((state) => state.contestProgress);
	const { problemNo, language, userCode } = useSelector(
		(state) => state.contestProgress.solveInfo[focusNo - 1]
	);
	const { testcases } = useSelector((state) => state.contestProgress.problemList[problemNo - 1]);

	async function runCode() {
		const { run, caseResultList, message } = await runTestCode({
			code: convertToEscapedString(userCode),
			language,
			testcases,
		});
		setTestResult({ run, caseResultList, message });
	}

	return (
		<ButtonsWrapper>
			<ThemeProvider theme={theme}>
				<Button onClick={runCode} variant="contained" color="primary" size="medium">
					<BoldSpan>코드 제출</BoldSpan>
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

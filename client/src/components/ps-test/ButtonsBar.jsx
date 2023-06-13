import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { sendContestData } from 'actions/progressContest';
import { useNavigate } from 'react-router-dom';

import useRunTestCode from 'hooks/problemSoving';
import { useSelector } from 'react-redux';
import convertToEscapedString from 'utils/problem';

function ButtonsBar() {
	const runTestCode = useRunTestCode();
	const { focusNo } = useSelector((state) => state.contestProgress);
	const { problemNo, language, userCode } = useSelector(
		(state) => state.contestProgress.solveInfo[focusNo - 1]
	);
	const { testcases } = useSelector((state) => state.contestProgress.problemList[problemNo - 1]);

	const navigate = useNavigate();

	const navigateToResult = () => {
		navigate('/result');
	};

	async function runCode() {
		const { code, run, caseResultList, message } = await runTestCode({
			code: convertToEscapedString(userCode),
			language,
			testcases,
		});
		if (run === true) {
			console.log(code);
			console.log(caseResultList);
			// TODO caseResultList를 이용하여 테스트 케이스 결과를 출력 (성공, 실패, 시간 초과 등)
		} else {
			console.log(code);
			console.log(message);
			// TODO message를 이용하여 오류 메시지 출력 (syntax error 등)
		}
	}

	// 최종 제출
	function submitCode() {
		sendContestData(userCodeList);
		navigateToResult();
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

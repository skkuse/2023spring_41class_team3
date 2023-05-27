import React from 'react';
import styled from 'styled-components';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

function ButtonsBar() {
	return (
		<ButtonsWrapper>
			<ThemeProvider theme={theme}>
				<Button variant="contained" color="primary" size="medium">
					<BoldSpan>제출</BoldSpan>
				</Button>
				<Button style={{ marginRight: '10px' }}>
					<BoldSpan>Run Code</BoldSpan>
				</Button>
				<Button style={{ margin: '0 auto 0 0' }} variant="outlined">
					<BoldSpan>Reset</BoldSpan>
				</Button>
			</ThemeProvider>
		</ButtonsWrapper>
	);
}

export default ButtonsBar;

const ButtonsWrapper = styled.div`
	margin-top: 2%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;

const BoldSpan = styled.span`
	font-weight: bold;
`;

import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function GotoInterviewButton() {
	const navigate = useNavigate();

	const navigateToMain = () => {
		navigate('/interview');
	};

	return (
		<ThemeProvider theme={theme}>
			<Button
				onClick={navigateToMain}
				style={{ marginTop: '10px' }}
				variant="contained"
				color="primary"
				size="medium"
			>
				<span style={{ fontWeight: 'bold' }}>가상면접 보기</span>
			</Button>
		</ThemeProvider>
	);
}

export default GotoInterviewButton;

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

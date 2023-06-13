import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function GotoMainButton() {
	const navigate = useNavigate();

	const navigateToMain = () => {
		navigate('/main');
	};

	return (
		<ThemeProvider theme={theme}>
			<Button
				onClick={navigateToMain}
				style={{ marginTop: '20px' }}
				variant="contained"
				color="primary"
				size="medium"
			>
				<span style={{ fontWeight: 'bold' }}>메인으로 이동</span>
			</Button>
		</ThemeProvider>
	);
}

export default GotoMainButton;

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

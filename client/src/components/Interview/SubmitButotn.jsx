import React from 'react';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
	palette: {
		primary: {
			main: '#8c717b', // 로고 색상
			// main: '#2e7d32', // 초록색
		},
	},
});

function SubmitButton() {
	return (
		<ThemeProvider theme={theme}>
			<Button style={{ marginTop: '5px' }} variant="contained" color="primary" size="medium">
				<span style={{ fontWeight: 'bold' }}>제출</span>
			</Button>
		</ThemeProvider>
	);
}

export default SubmitButton;

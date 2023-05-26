import React from 'react';
import { TextField } from '@material-ui/core';

function TextForm() {
	return (
		<TextField
			fullWidth
			label="Answer"
			variant="outlined"
			multiline
			minRows={10}
			maxRows={10}
			margin="normal"
			placeholder="답을 입력하세요"
			defaultValue=""
		/>
	);
}

export default TextForm;

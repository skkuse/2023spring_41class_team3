import React from 'react';
import styled from 'styled-components';

const RESET_MSG = '코드 리셋';

const ButtonWrapper = styled.button`
	width: 120px;
	height: 40px;
	background-color: white;
	color: black;
	box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
	font-size: 16px;
	font-weight: bold;
	border-radius: 20px;
`;

function ResetButton() {
	return <ButtonWrapper>{RESET_MSG}</ButtonWrapper>;
}

export default ResetButton;

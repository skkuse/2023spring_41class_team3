import React from 'react';
import styled from 'styled-components';

const LAN_SELEC_MSG = '언어 선택';

const ButtonWrapper = styled.button`
	width: 120px;
	height: 40px;
	background-color: white;
	color: black;
	box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
	font-size: 16px;
	font-weight: bold;
	border-radius: 20px;

	&:hover {
		background-color: #ecf0f2;
	}
`;

function LanguageSelectionButton() {
	return <ButtonWrapper>{LAN_SELEC_MSG}</ButtonWrapper>;
}

export default LanguageSelectionButton;

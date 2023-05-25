import React from 'react';
import styled from 'styled-components';

const TEST_MSG = '테스트 실행';

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

function TestButton() {
	return <ButtonWrapper>{TEST_MSG}</ButtonWrapper>;
}

export default TestButton;

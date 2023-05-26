import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	width: 60px;
	height: 60px;
	background-color: white;
	color: black;
	box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
	font-size: 20px;
	font-weight: bold;
	border-radius: 30px;

	&:hover {
		background-color: #ecf0f2;
	}
`;

function ProblemNumButton() {
	return <ButtonWrapper />;
}

export default ProblemNumButton;

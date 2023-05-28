import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 70px;
`;

const ButtonWrapper = styled.button`
	height: 40px;
	background-color: white;
	color: black;
	font-size: 16px;
	font-weight: bold;
	border-color: gray;

	&:hover {
		background-color: #ecf0f2;
	}
`;

function LangButton() {
	return (
		<Wrapper>
			<ButtonWrapper>C</ButtonWrapper>
			<ButtonWrapper>C++</ButtonWrapper>
			<ButtonWrapper>Python</ButtonWrapper>
		</Wrapper>
	);
}

export default LangButton;

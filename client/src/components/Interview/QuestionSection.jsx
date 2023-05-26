import OpenAISvg from 'assets/images/logos/OpenAI-svg';
import React from 'react';
import styled from 'styled-components';

function QuestionSection() {
	return (
		<Wrapper>
			<OpenAISvg />
		</Wrapper>
	);
}

export default QuestionSection;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 35vh;
`;

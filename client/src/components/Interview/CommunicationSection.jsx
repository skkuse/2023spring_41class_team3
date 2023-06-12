import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import OpenAISvg from 'assets/images/logos/OpenAI-svg';

function CommunicationSection() {
	const { focusNo } = useSelector((state) => state.interviewProgress);
	const { interviewProblems } = useSelector((state) => state.interviewProgress);

	const question = interviewProblems[focusNo - 1].description;

	return (
		<Wrapper>
			<OpenAISvg />
			<QuestionWrapper>{question}</QuestionWrapper>
		</Wrapper>
	);
}

export default CommunicationSection;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 60vh;
`;

const QuestionWrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px dashed #b6c9d7;
	border-radius: 10px;
	height: 25vh;
`;

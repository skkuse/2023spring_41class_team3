import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function QuestionAnswerSection() {
	const { focusNo } = useSelector((state) => state.interviewProgress);
	const { interviewProblems } = useSelector((state) => state.interviewProgress);

	const question = interviewProblems[focusNo - 1].description;
	const answer = interviewProblems[focusNo - 1].userResponse;

	return (
		<Wrapper>
			<QuestionAnswerWrapper>
				{question}
				{'\n\n\n답변:\n'}
				{answer}
			</QuestionAnswerWrapper>
		</Wrapper>
	);
}

export default QuestionAnswerSection;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 35vh;
`;

const QuestionAnswerWrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px dashed #b6c9d7;
	border-radius: 10px;
	height: 32vh;
	white-space: pre-wrap;
`;

import React from 'react';
import styled from 'styled-components';
import AnswerTextField from 'components/interview/AnswerTextField';
import SubmitButton from 'components/interview/SubmitButton';

function AnswerSection() {
	return (
		<Wrapper>
			<AnswerTextField />
			<SubmitButton />
		</Wrapper>
	);
}

export default AnswerSection;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 11vh;
	margin-top: 3%;
	padding: 10px;
`;

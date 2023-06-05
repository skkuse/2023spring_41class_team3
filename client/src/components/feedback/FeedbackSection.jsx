import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import OpenAISvg from 'assets/images/logos/OpenAI-svg';

function FeedbackSection() {
	const { focusNo } = useSelector((state) => state.feedbackProgress);
	const { feedbackData } = useSelector((state) => state.feedbackProgress);

	const { feedback } = feedbackData[focusNo - 1];

	return (
		<Wrapper>
			<OpenAISvg />
			<FeedbackWrapper>{feedback}</FeedbackWrapper>
		</Wrapper>
	);
}

export default FeedbackSection;

const Wrapper = styled.div`
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 35vh;
	margin-top: 3%;
	padding: 10px;
`;

const FeedbackWrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px dashed #b6c9d7;
	border-radius: 10px;
	height: 25vh;
`;

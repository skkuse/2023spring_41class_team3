import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function ProblemDescription() {
	const { focusNo } = useSelector((state) => state.contestProgress);
	const { title, description, inputDescription, outputDescription } = useSelector(
		(state) => state.contestProgress.problemInfo[focusNo - 1]
	);

	return (
		<Wrapper>
			<TitleWrapper>{title}</TitleWrapper>
			<SubtitleWrapper>문제 설명</SubtitleWrapper>
			<DescriptionWrapper>
				{description}
				{'\n\n\n'}
			</DescriptionWrapper>
			<SubtitleWrapper>입력</SubtitleWrapper>
			<DescriptionWrapper>
				{inputDescription}
				{'\n\n\n'}
			</DescriptionWrapper>

			<SubtitleWrapper>출력</SubtitleWrapper>
			<DescriptionWrapper>
				{outputDescription}
				{'\n\n\n'}
			</DescriptionWrapper>
		</Wrapper>
	);
}

export default ProblemDescription;

const Wrapper = styled.div`
	padding: 10px;
	padding-left: 25px;
	padding-right: 25px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 35vw;
	min-height: 77.5vh;
	max-height: 77.5vh;
	margin-left: 1%;
	overflow: auto;
`;

const TitleWrapper = styled.h1`
	margin-bottom: 5%;
`;

const SubtitleWrapper = styled.div`
	line-height: 200%;
	margin-bottom: 3%;
	font-weight: bold;
`;

const DescriptionWrapper = styled.div`
	white-space: pre-line;
	line-height: 185%;
`;

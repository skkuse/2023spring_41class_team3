import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function ProblemDescription() {
	const { focusNo } = useSelector((state) => state.contestProgress);
	const { title, description, constraint } = useSelector(
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
			<SubtitleWrapper>제한사항</SubtitleWrapper>
			{constraint.map((c) => (
				<ConstraintWrapper>
					{'ㆍ   '}
					{c}
				</ConstraintWrapper>
			))}
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
	height: 80vh;
	margin-left: 1%;
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

const ConstraintWrapper = styled.div`
	line-height: 185%;
`;

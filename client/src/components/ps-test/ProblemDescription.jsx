import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function ProblemDescription() {
	const { focusNo } = useSelector((state) => state.contestProgress);
	const { title, description } = useSelector(
		(state) => state.contestProgress.problemInfo[focusNo - 1]
	);

	return (
		<Wrapper>
			<TitleWrapper>{title}</TitleWrapper>
			<DescriptionWrapper>{description}</DescriptionWrapper>
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

const DescriptionWrapper = styled.div``;

import React from 'react';
import styled from 'styled-components';

import bgImage from '../../assets/images/background/landing-background.jpg';

import Header from '../../components/layout/Header';
import ContentBox from '../../components/problem-solve/ContentBox';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-postion: center;
`;

function ProblemSolvingPage() {
	return (
		<Wrapper>
			<Header />
			<ContentBox />
		</Wrapper>
	);
}

export default ProblemSolvingPage;

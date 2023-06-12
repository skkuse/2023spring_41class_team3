import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';

import Header from 'components/common/Header';
import SidebarContainer from 'components/result/SidebarContainer';
import ResultContent from 'components/result/ResultContent';
import { fetchResults } from 'actions/showResult';
import GotoMainButton from 'components/result/GotoMainButton';
import GotoInterviewButton from 'components/result/GotoInterviewButton';

function ResultPage() {
	fetchResults();

	return (
		<Wrapper>
			<Header />
			<Content>
				<SidebarContainer />
				<SectionWrapper>
					<ResultContent />
				</SectionWrapper>
				<ButtonWrapper>
					<GotoMainButton />
					<GotoInterviewButton />
				</ButtonWrapper>
			</Content>
		</Wrapper>
	);
}

export default ResultPage;

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Content = styled.main`
	margin: 2% 2% 0 2%;
	height: 80vh;
	display: flex;
`;

const SectionWrapper = styled.div`
	width: 80vw;
	margin: 0 2%;
`;

const ButtonWrapper = styled.div`
	width: 7vw;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-start;
	margin: 0 1.5% 0.5% 1%;
`;

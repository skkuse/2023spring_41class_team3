import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';

import Header from 'components/common/Header';
import SidebarContainer from 'components/Result/SidebarContainer';
import ResultContent from 'components/Result/ResultContent';
import { fetchResults } from 'actions/showResult';

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

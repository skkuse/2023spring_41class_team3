import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarFeedback from 'components/feedback/SidebarFeedback';
import QuestionSection from 'components/feedback/QuestionSection';
import FeedbackSection from 'components/feedback/FeedbackSection';
import { fetchFeedbackData } from 'actions/progressFeedback';

function FeedbackPage() {
	fetchFeedbackData();

	return (
		<Wrapper>
			<Header />
			<Content>
				<SidebarFeedback />
				<SectionWrapper>
					<QuestionSection />
					<FeedbackSection />
				</SectionWrapper>
			</Content>
		</Wrapper>
	);
}

export default FeedbackPage;

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
	width: 70vw;
	margin: 0 2%;
`;

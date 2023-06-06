import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarFeedback from 'components/feedback/SidebarFeedback';
import QuestionSection from 'components/feedback/QuestionSection';
import FeedbackSection from 'components/feedback/FeedbackSection';
import { fetchFeedbackData } from 'actions/progressFeedback';
import GotoMainButton from 'components/feedback/GotoMainButton';

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
				<ButtonWrapper>
					<GotoMainButton />
				</ButtonWrapper>
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

const ButtonWrapper = styled.div`
	width: 6vw;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-start;
	margin: 0 0 0.5% 2%;
`;

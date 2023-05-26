import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarInterview from 'components/Interview/SidebarInterview';
import QuestionSection from 'components/Interview/QuestionSection';
import AnswerSection from 'components/Interview/AnswerSection';

function InterviewPage() {
	return (
		<Wrapper>
			<Header />
			<Content>
				<SidebarInterview />
				<SectionWrapper>
					<QuestionSection />
					<AnswerSection />
				</SectionWrapper>
			</Content>
		</Wrapper>
	);
}

export default InterviewPage;

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Content = styled.main`
	margin: 0 2%;
	height: 80vh;
	display: flex;
`;

const SectionWrapper = styled.div`
	width: 80vw;
	margin: 0 2%;
`;

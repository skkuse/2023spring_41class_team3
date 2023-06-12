import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarInterview from 'components/Interview/SidebarInterview';
import QuestionSection from 'components/Interview/QuestionSection';
import AnswerSection from 'components/Interview/AnswerSection';
import SubmitButton from 'components/Interview/SubmitButotn';
import InterviewTimer from 'components/Interview/InterviewTimer';
import { fetchInterviewProblems } from 'actions/progressInterview';

function InterviewPage() {
	fetchInterviewProblems();

	return (
		<Wrapper>
			<Header />
			<Content>
				<SidebarInterview />
				<SectionWrapper>
					<QuestionSection />
					<AnswerSection />
				</SectionWrapper>
				<TimeButtonWrapper>
					<SubmitButton />
					<InterviewTimer />
				</TimeButtonWrapper>
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
	margin: 2% 2% 0 2%;
	height: 80vh;
	display: flex;
`;

const SectionWrapper = styled.div`
	width: 70vw;
	margin: 0 2%;
`;

const TimeButtonWrapper = styled.div`
	width: 6vw;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-start;
	margin: 0 0 0.5% 2%;
`;

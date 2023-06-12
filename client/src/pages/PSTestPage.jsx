import React from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarTest from 'components/ps-test/SidbarTest';
import ProblemDescription from 'components/ps-test/ProblemDescription';
import CodeEditor from 'components/ps-test/CodeEditor';
import EditorToolbar from 'components/ps-test/EditorToolbar';
import { fetchContestProblems } from 'actions/progressContest';

function PSTestPage() {
	fetchContestProblems();

	return (
		<Wrapper>
			<Header />
			<EditorToolbar />
			<Content>
				<SidebarTest />
				<ProblemDescription />
				<SolveSection>
					<CodeEditor />
				</SolveSection>
			</Content>
		</Wrapper>
	);
}

export default PSTestPage;

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const Content = styled.main`
	margin: 0.5% 2% 0 2%;
	height: 80vh;
	display: flex;
`;

const SolveSection = styled.div`
	width: 55vw;
	height: 77.5vh;
	margin-left: 1%;
`;

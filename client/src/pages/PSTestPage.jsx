import React, { useEffect } from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarTest from 'components/ps-test/SidbarTest';
import ProblemDescription from 'components/ps-test/ProblemDescription';
import CodeEditor from 'components/ps-test/CodeEditor';
import EditorToolbar from 'components/ps-test/EditorToolbar';
import { setProblems } from 'actions/progressContest';
import { useLocation, useNavigate } from 'react-router-dom';
import useInitCodingTest from 'hooks/codingTest';
import { useDispatch } from 'react-redux';

function PSTestPage() {
	const location = useLocation();
	const { difficulty, number } = location.state;
	const initCodingTest = useInitCodingTest(difficulty, number);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const { problemList, testId } = await initCodingTest();
			dispatch(setProblems(problemList));

			const eventSource = new EventSource(`/api/coding-test/termination/${testId}`);
			eventSource.onmessage = ({ data }) => {
				const { terminate } = JSON.parse(data);
				if (terminate) useNavigate('/result');
			};
		})();
	}, []);

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
	height: 80vh;
	margin-left: 1%;
`;

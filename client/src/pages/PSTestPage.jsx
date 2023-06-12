import React, { useEffect, useState } from 'react';
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
import { setTimeLimit } from 'actions/initContest';
import Spinner from 'components/common/spinner';

function PSTestPage() {
	const [isLoaded, setIsLoaded] = useState(true);

	const navigate = useNavigate();
	const location = useLocation();
	const { difficulty, number } = location.state;
	const initCodingTest = useInitCodingTest(difficulty, number);
	const dispatch = useDispatch();

	useEffect(() => {
		let eventSource;
		(async () => {
			const { problemList, testId, remainTime } = await initCodingTest();
			dispatch(setTimeLimit(remainTime));
			dispatch(setProblems(problemList));

			eventSource = new EventSource(`/api/coding-test/termination/${testId}`);
			eventSource.onmessage = ({ data }) => {
				const { terminate } = JSON.parse(data);
				if (terminate) navigate('/result');
			};
			setIsLoaded(false);
		})();
		return () => {
			if (eventSource) eventSource.close();
		};
	}, []);

	return isLoaded ? (
		<Spinner />
	) : (
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

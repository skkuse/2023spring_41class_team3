import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import bgImage from 'assets/images/background/landing-background.jpg';
import Header from 'components/common/Header';
import SidebarTest from 'components/ps-test/SidbarTest';
import ProblemDescription from 'components/ps-test/ProblemDescription';
import CodeEditor from 'components/ps-test/CodeEditor';
import EditorToolbar from 'components/ps-test/EditorToolbar';

function PSTestPage() {
	const [selectedProblem, setSelectedProblem] = useState(0);
	const handleProblemSelect = useCallback((index) => {
		setSelectedProblem(index);
	}, []);

	// 문제 수
	const NumProblems = 5;

	// 문제 데이터
	const Problems = [
		// 첫 번째 문제
		{
			id: 'problem1',
			description: 'problem1 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{ input: 'testinput', output: 3 },
				{ input: 23, output: 'expectedoutput2' },
			],
		},

		// 두 번째 문제
		{
			id: 'problem2',
			description: 'problem2 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{ input: 'testinput', output: 3 },
				{ input: 23, output: 'expectedoutput2' },
			],
		},

		// 세 번째 문제
		{
			id: 'problem3',
			description: 'problem3 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{ input: 'testinput', output: 3 },
				{ input: 23, output: 'expectedoutput2' },
			],
		},

		// 네 번째 문제
		{
			id: 'problem4',
			description: 'problem4 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{ input: 'testinput', output: 3 },
				{ input: 23, output: 'expectedoutput2' },
			],
		},

		// 다섯 번째 문제
		{
			id: 'problem5',
			description: 'problem5 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{ input: 'testinput', output: 3 },
				{ input: 23, output: 'expectedoutput2' },
			],
		},
	];

	const { id, description, constraint } = Problems[selectedProblem];

	return (
		<Wrapper>
			<Header />
			<EditorToolbar />
			<Content>
				<SidebarTest numProblems={NumProblems} onSelectProblem={handleProblemSelect} />
				<ProblemDescription title={id} description={description} constraint={constraint} />
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
	// padding: 10px;
	// background-color: #ecf1f4;
	// border: 2px solid #b6c9d7;
	// border-radius: 10px;
	width: 55vw;
	height: 80vh;
	margin-left: 1%;
`;

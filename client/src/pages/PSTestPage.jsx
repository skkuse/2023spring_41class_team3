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
			id: '유기농 배추',
			description:
				'차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.\n한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.',
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

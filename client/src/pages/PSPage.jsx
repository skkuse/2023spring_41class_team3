import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import bgImage from '../assets/images/background/landing-background.jpg';

import Header from '../components/layout/Header';
import CodeEditBox from '../components/problem-solve/CodeEditBox';
import TestResult from '../components/problem-solve/TestResult';
import ResetButton from '../components/ResetButton';
import TestButton from '../components/TestButton';
import SubmitButton from '../components/SubmitButton';
import LangButton from '../components/LangButton';
import ProblemNumButton from '../components/ProblemNumButton';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const ContentBox = styled.div`
	width: 100%;
	display: flex;
	height: calc(100% - 110px);
`;

const ProblemBox = styled.div`
	align-content: left;
	display: block;
	width: 30%;
	margin: 20px;
	background-color: white;
`;

const ProblemTitle = styled.div`
	display: inline-block;
	color: black;
	background-color: #d4dce4;
	text-align: left;
	width: 100%;
	word-wrap: break-word;
	overflow: auto;
	font-size: 20px;
`;

const ProblemContent = styled.div`
	display: inline-block;
	background-size: cover;
	text-align: left;
	width: 100%;
	overflow: hidden;
	background-size: cover;
`;

const CodingBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;
	width: 60%;
`;

const ButtonBox = styled.div`
	flex-wrap: nowrap;
	height: 5%;
	display: flex;
	justify-content: space-between;
`;

const LanguageSelectionButton = styled.button`
	width: 120px;
	height: 40px;
	background-color: white;
	color: black;
	box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
	font-size: 16px;
	font-weight: bold;
	position: absolute;
	bottom: 30px;

	&:hover {
		background-color: #ecf0f2;
	}
`;

const LanguageBox = styled.div`
	display: flex;
	flex-direction: column;
`;

function ProblemSolvingPage() {
	const [visible, setVisible] = useState(false);
	const [selectedProblem, setSelectedProblem] = useState(0);

	const ProblemDescription = [
		// 첫 번째 문제
		{
			id: 'problem1',
			description: 'problem1 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{
					input: 'testinput',
					output: 3,
				},
				{
					input: 23,
					output: 'expectedoutput2',
				},
			],
		},

		// 두 번째 문제
		{
			id: 'problem2',
			description: 'problem2 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{
					input: 'testinput',
					output: 3,
				},
				{
					input: 23,
					output: 'expectedoutput2',
				},
			],
		},

		// 세 번째 문제
		{
			id: 'problem3',
			description: 'problem3 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{
					input: 'testinput',
					output: 3,
				},
				{
					input: 23,
					output: 'expectedoutput2',
				},
			],
		},

		// 네 번째 문제
		{
			id: 'problem4',
			description: 'problem4 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{
					input: 'testinput',
					output: 3,
				},
				{
					input: 23,
					output: 'expectedoutput2',
				},
			],
		},

		// 다섯 번째 문제
		{
			id: 'problem5',
			description: 'problem5 content...',
			constraint: ['0<a<10', 'a<b<100'],
			testcases: [
				{
					input: 'testinput',
					output: 3,
				},
				{
					input: 23,
					output: 'expectedoutput2',
				},
			],
		},
	];

	const { id, description } = ProblemDescription[selectedProblem];

	const handleProblemSelect = useCallback((index) => {
		setSelectedProblem(index);
	}, []);

	return (
		<Wrapper>
			<Header />
			<ContentBox>
				<ProblemNumButton
					problemNum={ProblemDescription.length}
					onSelectProblem={handleProblemSelect}
				/>

				<ProblemBox>
					<ProblemTitle>{id}</ProblemTitle>
					<ProblemContent>{description}</ProblemContent>
				</ProblemBox>

				<CodingBox>
					<CodeEditBox />
					<TestResult />
					<ButtonBox>
						<LanguageBox>
							{visible && <LangButton />}
							<LanguageSelectionButton
								onClick={() => {
									setVisible(!visible);
								}}
							>
								{visible ? '▼ 언어선택' : '▲ 언어선택'}
							</LanguageSelectionButton>
						</LanguageBox>
						<ResetButton />
						<TestButton />
						<SubmitButton />
					</ButtonBox>
				</CodingBox>
			</ContentBox>
		</Wrapper>
	);
}

export default ProblemSolvingPage;

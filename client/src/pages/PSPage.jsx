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

// 헤더를 제외한 페이지 구성 컴포넌트들을 포함하는 박스
const ContentBox = styled.div`
	width: 100%;
	display: flex;
	height: calc(100% - 110px);
`;

// 문제 제목과 문제 내용을 담는 박스
const ProblemBox = styled.div`
	align-content: left;
	display: block;
	width: 30%;
	margin: 20px;
	background-color: white;
`;

// 문제 제목
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

// 문제 내용
const ProblemContent = styled.div`
	display: inline-block;
	background-size: cover;
	text-align: left;
	width: 100%;
	overflow: hidden;
	background-size: cover;
`;

// 에디터, 테스트 결과 출력 박스, 관련 버튼들을 구성하는 박스
const CodingBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;
	width: 60%;
`;

// 언어 선택, 코드 리셋, 테스트 실행, 제출 버튼을 포함하는 박스
const ButtonBox = styled.div`
	flex-wrap: nowrap;
	height: 5%;
	display: flex;
	justify-content: space-between;
`;

// 코딩 언어를 선택할 수 있는 버튼
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

// 선택할 수 있는 언어들을 담는 박스 (C, C++, Python)
const LanguageBox = styled.div`
	display: flex;
	flex-direction: column;
`;

function ProblemSolvingPage() {
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

	const CodeLanguage = [
		{
			languagename: 'python',
			defaultcode: 'def solution() {\n\tanswer = 0\n\treturn answer\n}',
		},

		{
			languagename: 'c',
			defaultcode:
				'#include <stdio.h>\n#include <stdbool.h>\n#include <stdlib.h>\n\nlong long* solution(int n, int z, int** roads, size_t roads_rows, size_t roads_cols, long long queries[], size_t queries_len) {\n\tlong long* answer = (long long*)malloc(1);\n\treturn answer;\n}',
		},

		{
			languagename: 'cpp',
			defaultcode:
				'#include <string>\n#include <vector>\n\nusing namespace std;\n\nvector<long long> solution(int n, int z, vector<vector<int>> roads, vector<long long> queries) {\n\tvector<long long> answer;\n\treturn answer;\n}',
		},
	];

	const [visible, setVisible] = useState(false);
	const [selectedProblem, setSelectedProblem] = useState(0);
	const [selectedLanguage, setSelectedLanguage] = useState('python');
	const [defaultCode, setDefaultCode] = useState(
		CodeLanguage.find((lang) => lang.languagename === selectedLanguage).defaultcode
	);

	const { id, description } = ProblemDescription[selectedProblem];

	const getDefaultCode = (languageName) => {
		const language = CodeLanguage.find((lang) => lang.languagename === languageName);
		if (language) {
			return language.defaultcode;
		}
		return null; // 또는 원하는 에러 처리를 수행할 수 있습니다.
	};

	const handleProblemSelect = useCallback((index) => {
		setSelectedProblem(index);
	}, []);

	const handleLanguageSelect = useCallback((language) => {
		setSelectedLanguage(language);
		setDefaultCode(getDefaultCode(language));
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
					<CodeEditBox defaultValue={defaultCode} />
					<TestResult />
					<ButtonBox>
						<LanguageBox>
							{visible && <LangButton onSelectLanguage={handleLanguageSelect} />}
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

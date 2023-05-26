import React from 'react';
import styled from 'styled-components';

import bgImage from '../../assets/images/background/landing-background.jpg';

import Header from '../../components/layout/Header';
import ProblemNumButton from '../../components/ProblemNumButton';
import CodeEditBox from '../../components/problem-solve/CodeEditBox';
import TestResult from '../../components/problem-solve/TestResult';
import LanguageSelectionButton from '../../components/LanguageSeletionButton';
import ResetButton from '../../components/ResetButton';
import TestButton from '../../components/TestButton';
import SubmitButton from '../../components/SubmitButton';

/*
Problem Description
{
	"_id":"problem1",
	"description":"problemcontent...",
	"contraint":["0<a<10","a<b<100"],
	"testcases":[
		{
			"input":"testinput",
			"output":3
		},
		{
			"input":23,
			"output":"expectedoutput2"
		}
	]
}
*/

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-postion: center;
`;

const ContentBox = styled.div`
	width: 100%;
	display: flex;
	height: calc(100% - 110px);
`;

const ProblemSelectionBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 40px;
	margin: 20px;
	background-color: white;
`;

const ProblemBox = styled.div`
	align-content: left;
	display: block;
	width: 30%;
	height: 100hv;
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
	hieght: 300px;
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
	display: flex;
	justify-content: space-between;
`;

function ProblemSolvingPage() {
	return (
		<Wrapper>
			<Header />
			<ContentBox>
				<ProblemSelectionBox>
					<ProblemNumButton>1</ProblemNumButton>
					<ProblemNumButton>2</ProblemNumButton>
					<ProblemNumButton>3</ProblemNumButton>
					<ProblemNumButton>4</ProblemNumButton>
					<ProblemNumButton>5</ProblemNumButton>
				</ProblemSelectionBox>

				<ProblemBox>
					<ProblemTitle>문제제목</ProblemTitle>
					<ProblemContent>문제내용</ProblemContent>
				</ProblemBox>

				<CodingBox>
					<CodeEditBox />
					<TestResult />
					<ButtonBox>
						<LanguageSelectionButton />
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

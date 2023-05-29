import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// const QUESTION_TEXT = 'question text here from json';

function ProblemDescription() {
	const { language } = useSelector((state) => state.contestProgress.contestProgress.editorInfo);

	return <Wrapper>{`${language}`}</Wrapper>;
}

export default ProblemDescription;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 35vw;
	height: 80vh;
	margin-left: 1%;
`;

import React from 'react';
import styled from 'styled-components';

const QUESTION_TEXT = 'question text here from json';

function QuestionBox() {
	return <Wrapper>{QUESTION_TEXT}</Wrapper>;
}

export default QuestionBox;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px dashed #b6c9d7;
	border-radius: 10px;
	height: 25vh;
`;

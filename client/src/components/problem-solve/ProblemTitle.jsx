import React from 'react';
import styled from 'styled-components';

const TITLE = '문제 제목 하노이 탑';

const Wrapper = styled.div`
	display: inline-block;
	color: black;
	background-color: #d4dce4;
	text-align: left;
	width: 100%;
	word-wrap: break-word;
	overflow: auto;
	font-size: 20px;
`;

const Title = styled.h1``;

function ProblemTitle() {
	return (
		<Wrapper>
			<Title>{TITLE}</Title>
		</Wrapper>
	);
}

export default ProblemTitle;

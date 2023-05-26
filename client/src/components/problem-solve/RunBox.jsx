import React from 'react';
import styled from 'styled-components';
import TestResult from './TestResult';

const Wrapper = styled.div`
	background-color: black;
	display: block;
	width: 65%;
	margin: 20px;
`;

const TextBox = styled.div`
	text-align: left;
	display: inline-block;
	width: 100%;
`;

function RunBox() {
	return (
		<Wrapper>
			<TextBox>
				<div>실행 결과</div>
			</TextBox>
			<TestResult />
		</Wrapper>
	);
}

export default RunBox;

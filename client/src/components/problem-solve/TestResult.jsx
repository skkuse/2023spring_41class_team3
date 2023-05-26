import React from 'react';
import styled from 'styled-components';

const RESULT = '테스트 실행 결과 나타내는 곳.';

const Wrapper = styled.div`
	display: inline-block;
	background-color: #c0d0dc;
	background-size: cover;
	text-align: left;
	width: 100%;
	height: 30%;
	overflow: auto;
	background-size: cover;
	text-align: left;
`;

function TestResult() {
	return (
		<Wrapper>
			<h3>{RESULT}</h3>
		</Wrapper>
	);
}

export default TestResult;

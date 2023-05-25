import React from 'react';
import styled from 'styled-components';

import CodeEditBox from './CodeEditBox';
import TestResult from './TestResult';
import ButtonBox from './ButtonBox';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;
	width: 60%;
`;

function CodingBox() {
	return (
		<Wrapper>
			<CodeEditBox />
			<TestResult />
			<ButtonBox />
		</Wrapper>
	);
}

export default CodingBox;

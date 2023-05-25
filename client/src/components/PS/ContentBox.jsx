import React from 'react';
import styled from 'styled-components';

import ProblemSelectionBox from './ProblemSeletionBox';
import ProblemBox from './ProblemBox';
import CodingBox from './CodingBox';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	height: calc(100vh - 100px);
`;

function ContentBox() {
	return (
		<Wrapper>
			<ProblemSelectionBox />
			<ProblemBox />
			<CodingBox />
		</Wrapper>
	);
}

export default ContentBox;

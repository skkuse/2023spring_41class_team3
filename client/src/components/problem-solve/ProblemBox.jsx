import React from 'react';
import styled from 'styled-components';

import ProblemTitle from './ProblemTitle';
import ProblemContent from './ProblemContent';

const Wrapper = styled.div`
	align-content: left;
	display: block;
	width: 30%;
	height: 100hv;
	margin: 20px;
	background-color: white;
`;

function ProblemBox() {
	return (
		<Wrapper>
			<ProblemTitle />
			<ProblemContent />
		</Wrapper>
	);
}

export default ProblemBox;

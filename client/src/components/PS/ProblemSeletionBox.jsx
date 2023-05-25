import React from 'react';
import styled from 'styled-components';
import ProblemNumButton from '../ProblemNumButton';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 40px;
	margin: 20px;
	background-color: white;
`;

function ProblemSelectionBox() {
	return (
		<Wrapper>
			<ProblemNumButton>1</ProblemNumButton>
			<ProblemNumButton>2</ProblemNumButton>
			<ProblemNumButton>3</ProblemNumButton>
			<ProblemNumButton>4</ProblemNumButton>
			<ProblemNumButton>5</ProblemNumButton>
		</Wrapper>
	);
}

export default ProblemSelectionBox;

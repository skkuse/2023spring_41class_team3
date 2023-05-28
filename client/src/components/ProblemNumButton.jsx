import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 40px;
	margin: 20px;
	background-color: white;
`;

const ButtonWrapper = styled.button`
	width: 60px;
	height: 60px;
	background-color: white;
	color: black;
	box-shadow: 0 4px 16px rgba(0, 79, 255, 0.3);
	font-size: 20px;
	font-weight: bold;
	border-radius: 30px;

	&:hover {
		background-color: #ecf0f2;
	}
`;

function ProblemNumButton({ problemNum, onSelectProblem }) {
	function handleProblemSelect(index) {
		onSelectProblem(index);
	}

	function CreateButton(num) {
		const arr = [];

		for (let i = 0; i < num; i += 1) {
			arr.push(
				<ButtonWrapper key={i} onClick={() => handleProblemSelect(i)}>
					{i + 1}
				</ButtonWrapper>
			);
		}

		return arr;
	}

	return <Wrapper>{CreateButton(problemNum)}</Wrapper>;
}

ProblemNumButton.propTypes = {
	problemNum: PropTypes.number.isRequired,
	onSelectProblem: PropTypes.func.isRequired,
};

export default ProblemNumButton;

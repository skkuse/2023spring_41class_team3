import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProblemDescription({ title, description, constraint }) {
	return (
		<Wrapper>
			<h1>{title}</h1>
			<div>{description}</div>
			<h3>Constraint</h3>
			<div>{constraint}</div>
		</Wrapper>
	);
}

export default ProblemDescription;

ProblemDescription.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	constraint: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 35vw;
	height: 80vh;
	margin-left: 1%;
`;

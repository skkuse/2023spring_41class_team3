import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProblemDescription({ title, description, constraint }) {
	return (
		<Wrapper>
			<TitleWrapper>{title}</TitleWrapper>
			<DescriptionWrapper>{description}</DescriptionWrapper>
			<h3>Constraint</h3>
			<ConstraintWrapper>
				{constraint.map((c) => (
					<div>{c}</div>
				))}
			</ConstraintWrapper>
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

const TitleWrapper = styled.h1`
	line-height: 1.5em;
`;

const DescriptionWrapper = styled.div`
	line-height: 2em;
	white-space: pre-wrap;
`;

const ConstraintWrapper = styled.div`
	line-height: 2em;
`;

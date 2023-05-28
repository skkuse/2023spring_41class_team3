import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 70px;
`;

const ButtonWrapper = styled.button`
	height: 40px;
	background-color: white;
	color: black;
	font-size: 16px;
	font-weight: bold;
	border-color: gray;

	&:hover {
		background-color: #ecf0f2;
	}
`;

function LangButton({ onSelectLanguage }) {
	function handleLanguageSelect(language) {
		onSelectLanguage(language);
	}

	return (
		<Wrapper>
			<ButtonWrapper onClick={() => handleLanguageSelect('c')}>C</ButtonWrapper>
			<ButtonWrapper onClick={() => handleLanguageSelect('cpp')}>C++</ButtonWrapper>
			<ButtonWrapper onClick={() => handleLanguageSelect('python')}>Python</ButtonWrapper>
		</Wrapper>
	);
}

LangButton.propTypes = {
	onSelectLanguage: PropTypes.func.isRequired,
};

export default LangButton;

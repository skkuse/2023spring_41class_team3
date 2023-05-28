import React from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	background-color: #c0d0dc;
	height: 60%;
	width: 100%;
`;

function CodeEditBox({ defaultValue }) {
	return (
		<Wrapper>
			<Editor width="100%" height="100%" defaultValue={defaultValue} />
		</Wrapper>
	);
}

CodeEditBox.propTypes = {
	defaultValue: PropTypes.string.isRequired,
};

export default CodeEditBox;

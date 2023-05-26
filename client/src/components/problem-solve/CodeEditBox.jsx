import React from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

const Wrapper = styled.div`
	background-color: #c0d0dc;
	height: 60%;
	width: 100%;
`;

function CodeEditBox() {
	return (
		<Wrapper>
			<Editor width="100%" height="100%" />
		</Wrapper>
	);
}

export default CodeEditBox;

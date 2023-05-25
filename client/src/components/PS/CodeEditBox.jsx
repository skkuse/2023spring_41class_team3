import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: #c0d0dc;
	height: 60%;
	width: 100%;
`;

function CodeEditBox() {
	return (
		<Wrapper>
			<input type="text" />
		</Wrapper>
	);
}

export default CodeEditBox;

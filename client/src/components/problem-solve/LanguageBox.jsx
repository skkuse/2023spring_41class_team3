import React from 'react';
import styled from 'styled-components';

import LangButton from '../LangButton';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
`;

function LangaugeBox() {
	return (
		<Wrapper>
			<LangButton>C</LangButton>
			<LangButton>C++</LangButton>
			<LangButton>Python</LangButton>
			<LangButton>Kotlin</LangButton>
		</Wrapper>
	);
}

export default LangaugeBox;

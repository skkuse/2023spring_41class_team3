import React from 'react';
import styled from 'styled-components';

import LanguageSelectionButton from '../LanguageSeletionButton';
import ResetButton from '../ResetButton';
import TestButton from '../TestButton';
import SubmitButton from '../SubmitButton';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

function ButtonBox() {
	return (
		<Wrapper>
			<LanguageSelectionButton />
			<div> </div>
			<div> </div>
			<div> </div>
			<div> </div>
			<div> </div>
			<ResetButton />
			<TestButton />
			<SubmitButton />
		</Wrapper>
	);
}

export default ButtonBox;

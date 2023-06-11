import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import OpenAISvg from 'assets/images/logos/OpenAI-svg';

function DialogContent() {
	const { focusNo, focusType, results, analysis, feedback } = useSelector(
		(state) => state.contestResult
	);
	const Message = (focustype) => {
		switch (focustype) {
			case 'analysis':
				return analysis;
			case 'feedback':
				return feedback;
			default:
				return results[focusNo - 1][focustype];
		}
	};

	return (
		<Wrapper>
			<OpenAISvg />
			<MessageWrapper>
				<span style={{ fontSize: '20px' }}>{Message(focusType)}</span>
			</MessageWrapper>
		</Wrapper>
	);
}

export default DialogContent;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 75vh;
`;

const MessageWrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px dashed #b6c9d7;
	border-radius: 10px;
	height: 65vh;
`;

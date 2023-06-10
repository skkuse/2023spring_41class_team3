import OpenAISvg from 'assets/images/logos/OpenAI-svg';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const msgStyle = {
	fontSize: '20px',
};

function DialogContent() {
	const { resultType } = useSelector((state) => state.resultType);
	const { problemNo } = useSelector((state) => state.problemNo);

	// 원하는 결과 타입에 따라 메세지 작성
	const MSG = `: This is problem ${problemNo}'s ${resultType}`;

	return (
		<Wrapper>
			<TopMessage>
				<OpenAISvg />
				<span style={msgStyle}>{MSG}</span>
			</TopMessage>
		</Wrapper>
	);
}

export default DialogContent;

const TopMessage = styled.div`
	vertical-align: middle;
	line-height: 20px;
	font-size: 20px;
`;
const Wrapper = styled.div`
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 70vh;
`;

import React from 'react';
import styled from 'styled-components';
import userImg from 'assets/images/user.png';
import AnswerTextField from './AnswerTextField';

const userImgStyle = {
	width: '41px',
	height: '41px',
};

function AnswerSection() {
	return (
		<Wrapper>
			<img style={userImgStyle} src={`${userImg}`} alt="user-icon" />
			<AnswerTextField />
		</Wrapper>
	);
}

export default AnswerSection;

const Wrapper = styled.div`
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 35vh;
	margin-top: 3%;
	padding: 10px;
`;

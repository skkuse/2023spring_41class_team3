import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import OpenAISvg from 'assets/images/logos/OpenAI-svg';
import userImg from 'assets/images/user.png';
import CodeBox from './CodeBox';

function ResultImproved() {
	const { focusNo, results } = useSelector((state) => state.contestResult);
	const { language, userCode, improvedCode } = results[focusNo - 1];

	function makeCodeProps(_code, _language) {
		return {
			code: _code,
			language: _language,
		};
	}

	return (
		<Wrapper>
			<FlexWrapper>
				<CodeWrapper>
					<img
						style={{ width: '41px', height: '41px' }}
						src={`${userImg}`}
						alt="user-icon"
					/>
					<CodeBox className="UserCode" props={makeCodeProps(userCode, language)} />
				</CodeWrapper>
				<CodeWrapper>
					<OpenAISvg />
					<CodeBox
						className="ImprovedCode"
						props={makeCodeProps(improvedCode, language)}
					/>
				</CodeWrapper>
			</FlexWrapper>
		</Wrapper>
	);
}

export default ResultImproved;

const Wrapper = styled.div`
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	width: 100%;
	height: 80vh;
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CodeWrapper = styled.div`
	display: block;
`;

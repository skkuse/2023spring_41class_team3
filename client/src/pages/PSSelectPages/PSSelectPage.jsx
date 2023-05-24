import React from 'react';
import styled from 'styled-components';

import Header2 from 'components/layout/Header2';

import SearchBoxContainer from 'components/PSSelect/SearchBoxContainer';
import PSListContainer from 'components/PSSelect/PSListContainer';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const Content = styled.main`
	width: 100%;
	height: 100%;
	margin: 0;
	display: flex;
	flex-direction: column;
`;

const SelectProblem = styled.div`
	text-align: left;
	padding-left: 8px;
	font-size: 18px;
	color: #55565b;
	margin: 8px;
	font-weight: bold;
`;

function PSSelectPage() {
	return (
		<Wrapper>
			<Header2 />
			<Content>
				<SearchBoxContainer />
				<SelectProblem>문제 선택하기</SelectProblem>
				<PSListContainer />
			</Content>
		</Wrapper>
	);
}

export default PSSelectPage;

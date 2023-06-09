/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import ContestTimer from 'components/ps-test/ContestTimer';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTheme } from 'actions/progressContest';
import { useTerminateCodingTest } from 'hooks/codingTest';

function EditorToolbar() {
	const dispatch = useDispatch();
	const terminateCodingTest = useTerminateCodingTest();

	const { focusNo, theme } = useSelector((state) => state.contestProgress);
	const { language } = useSelector((state) => state.contestProgress.solveInfo[focusNo - 1]);

	function changeLanguage(event) {
		dispatch(setLanguage(focusNo, event.target.value));
	}

	function changeTheme(event) {
		dispatch(setTheme(event.target.value));
	}

	const languageList = ['c', 'cpp', 'python', 'javascript'];

	return (
		<Wrapper>
			<TerminateButton onClick={terminateCodingTest}>테스트 종료</TerminateButton>
			<ContestTimer />
			<SelectLabel>남은 시간: </SelectLabel>
			<Select
				sx={{ minWidth: '120px' }}
				size="small"
				style={{ backgroundColor: '#fff' }}
				defaultValue={language}
				value={language}
				onChange={changeLanguage}
			>
				{languageList.map((lang) => (
					<MenuItem value={lang}>{lang}</MenuItem>
				))}
			</Select>
			<SelectLabel>채점 언어</SelectLabel>
			<Select
				sx={{ minWidth: '80px' }}
				size="small"
				style={{ backgroundColor: '#fff' }}
				defaultValue={theme}
				value={theme}
				onChange={changeTheme}
			>
				<MenuItem value="light">light</MenuItem>
				<MenuItem value="vs-dark">dark</MenuItem>
			</Select>
			<SelectLabel>테마</SelectLabel>
		</Wrapper>
	);
}

export default EditorToolbar;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	margin: 0 3% 0 0;
`;

const SelectLabel = styled.span`
	font-size: 16px;
	margin: 0 10px;
`;

const TerminateButton = styled.button`
	height: 3rem;
	width: 8rem;
	background-color: #fff;
	border: 1px solid #9e9e9e;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 500;
	margin-left: 24px;
	cursor: pointer;
`;

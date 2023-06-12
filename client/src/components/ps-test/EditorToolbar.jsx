/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import ContestTimer from 'components/ps-test/ContestTimer';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTheme } from 'actions/progressContest';

function EditorToolbar() {
	const dispatch = useDispatch();

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

/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import CountdownTimer from 'components/CountdownTimer';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, setTheme } from 'actions/setResults';

function EditorToolbar() {
	const { focusNo } = useSelector((state) => state.contestProgress.contestProgress);

	const { language } = useSelector(
		(state) => state.contestProgress.contestProgress.problemInfo[focusNo - 1]
	);

	const { theme } = useSelector((state) => state.contestProgress.contestProgress.editorInfo);

	const dispatch = useDispatch();

	function changeLanguage(event) {
		dispatch(setLanguage(focusNo, event.target.value));
	}

	function changeTheme(event) {
		dispatch(setTheme(event.target.value));
	}

	return (
		<Wrapper>
			<CountdownTimer />
			<SelectLabel>남은 시간: </SelectLabel>
			<Select
				sx={{ minWidth: '120px' }}
				size="small"
				style={{ margin: '0 ' }}
				defaultValue={language}
				onChange={changeLanguage}
			>
				<MenuItem value="javascript">Javascript</MenuItem>
				<MenuItem value="c">C</MenuItem>
				<MenuItem value="cpp">C++</MenuItem>
				<MenuItem value="python">Python</MenuItem>
			</Select>
			<SelectLabel>Language</SelectLabel>
			<Select
				sx={{ minWidth: '80px' }}
				size="small"
				defaultValue={theme}
				onChange={changeTheme}
			>
				<MenuItem value="light">light</MenuItem>
				<MenuItem value="vs-dark">dark</MenuItem>
			</Select>
			<SelectLabel>Theme</SelectLabel>
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

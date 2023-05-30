/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Editor from '@monaco-editor/react';
import SplitPane, { Pane } from 'react-split-pane';

import { setUserCode } from 'actions/setContest';
import ButtonsBar from './ButtonsBar';

const defualtCode = '// default code';

function CodeEditor() {
	const dispatch = useDispatch();

	const { focusNo } = useSelector((state) => state.contestProgress.contestProgress);

	const { language } = useSelector(
		(state) => state.contestProgress.contestProgress.problemInfo[focusNo - 1]
	);

	const { theme } = useSelector((state) => state.contestProgress.contestProgress.editorInfo);

	const { userCode } = useSelector(
		(state) => state.contestProgress.contestProgress.problemInfo[focusNo - 1]
	);

	function saveCode(event) {
		dispatch(setUserCode(focusNo, event));
	}

	return (
		<div>
			<Wrapper>
				<SplitPane style={{ position: 'relative' }} split="horizontal" defaultSize="90%">
					<Pane initialSize="75%" minSize="20%" maxSize="100%">
						<Editor
							defaultLanguage={language}
							language={language}
							defaultValue={defualtCode}
							theme={theme}
							onChange={saveCode}
							value={userCode}
						/>
					</Pane>
					<Pane initialSize="25%" minSize="10%" maxSize="500px">
						Run code result
					</Pane>
				</SplitPane>
			</Wrapper>
			<ButtonsBar />
		</div>
	);
}

export default CodeEditor;

const Wrapper = styled.div`
	// padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	font-size: 20px;
	height: 75vh;
`;

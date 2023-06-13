import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Editor from '@monaco-editor/react';
import SplitPane, { Pane } from 'react-split-pane';

import { setUserCode } from 'actions/progressContest';
import ButtonsBar from './ButtonsBar';

function CodeEditor() {
	const dispatch = useDispatch();

	const { focusNo, theme } = useSelector((state) => state.contestProgress);
	const { userCode, language } = useSelector(
		(state) => state.contestProgress.solveInfo[focusNo - 1]
	);

	function saveCode(event) {
		dispatch(setUserCode(focusNo, event));
	}

	return (
		<div>
			<Wrapper>
				<SplitPane style={{ position: 'relative' }} split="horizontal" defaultSize="90%">
					<Pane className="code-edit-area" initialSize="75%" minSize="20%" maxSize="100%">
						<Editor
							defaultLanguage={language}
							language={language}
							theme={theme}
							onChange={saveCode}
							value={userCode}
							options={{
								scrollBeyondLastLine: false,
								fontSize: '15px',
							}}
						/>
					</Pane>
					<Pane className="result-area" initialSize="25%" minSize="10%" maxSize="500px">
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
	padding: 10px;
	background-color: #ecf1f4;
	border: 2px solid #b6c9d7;
	border-radius: 10px;
	font-size: 20px;
	height: 71.8vh;
`;

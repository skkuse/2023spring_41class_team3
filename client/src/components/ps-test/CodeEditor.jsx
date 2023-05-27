/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Editor from '@monaco-editor/react';
import SplitPane, { Pane } from 'react-split-pane';

import ButtonsBar from './ButtonsBar';

const settings = {
	language: 'javascript',
	defaultValue: '// some comment',
};

function CodeEditor() {
	return (
		<div>
			<Wrapper>
				<SplitPane style={{ position: 'relative' }} split="horizontal" defaultSize="90%">
					<Pane initialSize="75%" minSize="20%" maxSize="100%">
						<Editor
							defaultLanguage={settings.language}
							defaultValue={settings.defaultValue}
							theme="vs-dark"
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

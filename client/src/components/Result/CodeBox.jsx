import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const customStyle = {
	width: '36vw',
	height: '80vh',
	overflow: 'auto',
	textColor: 'white',
};

function CodeBox({ props }) {
	return (
		<SyntaxHighlighter
			customStyle={customStyle}
			language={props.language}
			style={theme}
			showLineNumbers={props.showLineNumbers}
			startingLineNumber={props.startingLineNumber}
			wrapLines={props.wrapLines}
			wrapLongLines={props.wrapLongLines}
		>
			{props.code}
		</SyntaxHighlighter>
	);
}

export default CodeBox;

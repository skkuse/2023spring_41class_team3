import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const customStyle = {
	width: '36vw',
	height: '70vh',
	overflow: 'auto',
	// textColor: 'white',
};

function CodeBox({ props }) {
	return (
		<SyntaxHighlighter
			customStyle={customStyle}
			language={props.language}
			style={theme}
			showLineNumbers
			startingLineNumber={1}
			wrapLines
			wrapLongLines={false}
		>
			{props.code}
		</SyntaxHighlighter>
	);
}

export default CodeBox;

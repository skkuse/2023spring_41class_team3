function convertToEscapedString(code) {
	return code.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
}

export default convertToEscapedString;

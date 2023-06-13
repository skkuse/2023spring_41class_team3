function convertToEscapedString(code) {
	return code.replace(/\n/g, '\n').replace(/\t/g, '\t').replace(/"/g, '"');
}

export default convertToEscapedString;

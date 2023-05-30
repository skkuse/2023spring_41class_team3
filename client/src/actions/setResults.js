export function setProblemNo(num) {
	return {
		type: 'RESULT_PROBLEM_NO',
		payload: num,
	};
}

export function setResultType(type) {
	return {
		type: 'RESULT_TYPE',
		payload: type,
	};
}

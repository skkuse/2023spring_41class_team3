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

export function setProblems(problemInfos) {
	/* 
	problemInfos: [
		{
			problemNo:
			_id:
			description:
			testcases: [
				{
					input: '',
					output: '',
				},
			],
			userCode: '',
		}
	]
	*/
	return {
		type: 'PROGRESS_PROBLEM_SET',
		payload: problemInfos,
	};
}

export function setLanguage(focusNo, language) {
	return {
		type: 'PROGRESS_SET_LANGUAGE',
		payload: { focusNo, language },
	};
}

export function setTheme(theme) {
	return {
		type: 'PROGRESS_SET_THEME',
		payload: theme,
	};
}

export function setFocusNo(num) {
	return {
		type: 'PROGRESS_FOCUS_NO',
		payload: num,
	};
}

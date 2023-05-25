const initialState = {
	problemNo: 1,
};

function problemNoReducer(state = initialState, action) {
	switch (action.type) {
		case 'RESULT_PROBLEM_NO':
			return {
				...state,
				problemNo: action.payload,
			};
		default:
			return state;
	}
}

export default problemNoReducer;

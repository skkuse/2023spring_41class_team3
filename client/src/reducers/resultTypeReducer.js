const initialState = {
	resultType: 'readability',
};

function resultTypeReducer(state = initialState, action) {
	switch (action.type) {
		case 'RESULT_TYPE':
			return {
				...state,
				resultType: action.payload,
			};
		default:
			return state;
	}
}

export default resultTypeReducer;

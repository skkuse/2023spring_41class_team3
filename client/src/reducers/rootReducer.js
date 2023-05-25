import { combineReducers } from 'redux';
import problemNoReducer from './problemNoReducer';
import resultTypeReducer from './resultTypeReducer';

const rootReducer = combineReducers({
	problemNo: problemNoReducer,
	resultType: resultTypeReducer,
});

export default rootReducer;

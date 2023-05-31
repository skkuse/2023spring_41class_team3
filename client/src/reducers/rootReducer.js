import { combineReducers } from 'redux';
import initContestReducer from './initContestReducer';
import contestProgressReducer from './contestProgressReducer';
import resultReducer from './resultRedcuer';
import interviewReducer from './interviewReducer';

const rootReducer = combineReducers({
	contestSetting: initContestReducer,
	contestProgress: contestProgressReducer,
	contestResult: resultReducer,
	interviewProgress: interviewReducer,
});

export default rootReducer;

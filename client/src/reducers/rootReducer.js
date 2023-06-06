import { combineReducers } from 'redux';
import initContestReducer from './initContestReducer';
import contestProgressReducer from './contestProgressReducer';
import resultReducer from './resultRedcuer';
import interviewReducer from './interviewReducer';
import feedbackReducer from './feedbackReducer';

const rootReducer = combineReducers({
	contestSetting: initContestReducer,
	contestProgress: contestProgressReducer,
	contestResult: resultReducer,
	interviewProgress: interviewReducer,
	feedbackProgress: feedbackReducer,
});

export default rootReducer;

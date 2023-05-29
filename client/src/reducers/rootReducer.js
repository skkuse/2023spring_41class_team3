import { combineReducers } from 'redux';
import problemNoReducer from './problemNoReducer';
import resultTypeReducer from './resultTypeReducer';
import contestSettingReducer from './contestSettingReducer';
import contestProgressReducer from './contestProgressReducer';

const rootReducer = combineReducers({
	contestSetting: contestSettingReducer,
	contestProgress: contestProgressReducer,
	problemNo: problemNoReducer,
	resultType: resultTypeReducer,
});

export default rootReducer;

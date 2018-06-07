import { combineReducers } from 'redux';

import preferences from './preferences/reducer';

const rootReducer = combineReducers({
  preferences,
});

export default rootReducer;

import { combineReducers } from 'redux';

import preferences from './screens/preferences/reducer';

const rootReducer = combineReducers({
  preferences,
});

export default rootReducer;

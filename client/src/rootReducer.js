import { combineReducers } from 'redux';

import preferences from './screens/preferences/reducer';
import session from './reducer';

const rootReducer = combineReducers({
  preferences,
  session,
});

export default rootReducer;

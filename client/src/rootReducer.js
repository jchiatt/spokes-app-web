import { combineReducers } from 'redux';

import preferences from './screens/preferences/reducer';
import session from './reducer';
import weather from './screens/today/reducer';

const rootReducer = combineReducers({
  preferences,
  session,
  weather,
});

export default rootReducer;

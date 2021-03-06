/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { load, save } from 'redux-localstorage-simple';

import rootReducer from './rootReducer';

import AppRouter from './AppRouter';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

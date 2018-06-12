import { HANDLE_USER_SESSION } from './actions';

const initialState = {
  loggedIn: false,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case HANDLE_USER_SESSION:
      return {
        ...state,
        loggedIn: !state.loggedIn,
      };
    default:
      return state;
  }
}

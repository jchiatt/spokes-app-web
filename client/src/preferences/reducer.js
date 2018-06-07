import { GET_PREFERENCES, SAVE_PREFERENCES } from '../preferences/actions';

const initialState = {
  preferences: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PREFERENCES:
      return {
        ...state,
        preferences: payload,
      };
    case SAVE_PREFERENCES:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}

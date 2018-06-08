import { GET_PREFERENCES, UPDATE_PREFERENCES, SAVE_PREFERENCES } from '../preferences/actions';

const initialState = {
  preferences: {},
  preferencesLoaded: false,
};

export default function (state = initialState, action) {
  const { type, payload, update } = action;

  switch (type) {
    case GET_PREFERENCES:
      return {
        ...state,
        preferences: payload,
        preferencesLoaded: true,
      };
    case SAVE_PREFERENCES:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...payload,
        },
      };
    default:
      return state;
  }
}

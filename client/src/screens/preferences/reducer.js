import { GET_PREFERENCES, SAVE_PREFERENCES } from './actions';

const initialState = {
  preferences: {},
  preferencesLoaded: false,
  preferencesLoadedAt: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PREFERENCES:
      return {
        ...state,
        preferences: payload,
        preferencesLoaded: true,
        preferencesLoadedAt: new Date(),
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

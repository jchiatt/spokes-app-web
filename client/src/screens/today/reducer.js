import { GET_FORECAST } from './actions';

const initialState = {
  current_condition: {},
  forecast: [],
  weatherLoaded: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FORECAST:
      return {
        ...state,
        current_condition: payload.current_condition[0],
        forecast: payload.weather,
        weatherLoaded: true,
      };
    default:
      return state;
  }
}

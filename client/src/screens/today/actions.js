/* eslint func-names: 0 */

import axios from 'axios';
import { WEATHER_API_ROOT } from '../../api-config';

export const GET_FORECAST = 'GET_FORECAST';

export function getForecast(zip) {
  return async function (dispatch) {
    const response = await axios.get(`${WEATHER_API_ROOT()}&q=${zip}&num_of_days=7&format=json`);
    const payload = await response.data.data;

    return dispatch({
      type: GET_FORECAST,
      payload,
    });
  };
}

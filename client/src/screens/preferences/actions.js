/* eslint func-names: 0 */

import axios from 'axios';
import qs from 'qs';
import { API_ROOT } from '../../api-config';

const PREFERENCES_ENDPOINT = '/preferences';
const prefID = '5b15feaa022b3c85cf520a52';

export const GET_PREFERENCES = 'GET_PREFERENCES';
export const SAVE_PREFERENCES = 'SAVE_PREFERENCES';

export function getPreferences() {
  return async function (dispatch) {
    const response = await axios.get(`${API_ROOT()}${PREFERENCES_ENDPOINT}/${prefID}`);
    const payload = await response.data;
    return dispatch({
      type: GET_PREFERENCES,
      payload,
    });
  };
}

export function savePreferences(preferences) {
  return async function (dispatch) {
    const request = {
      method: 'PUT',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(preferences),
      url: `${API_ROOT()}${PREFERENCES_ENDPOINT}/${prefID}`,
    };

    const response = await axios(request);
    const payload = await response.data;

    return dispatch({
      type: SAVE_PREFERENCES,
      payload,
    });
  };
}


import axios from 'axios';
import qs from 'qs';

const API_BASE = 'http://localhost:8000/preferences';
const prefID = '5b15feaa022b3c85cf520a52';

export const getPreferences = async () => {
  const data = await axios.get(`${API_BASE}/${prefID}`);
  return data;
};

export const savePreferences = async (data) => {
  const request = {
    method: 'PUT',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: `${API_BASE}/${prefID}`,
  };

  console.log(data);

  const response = await axios(request);
  console.log(response);
  return response;
};


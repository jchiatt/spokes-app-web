import axios from 'axios';
import qs from 'qs';

export const getPreferences = () => {
  const API_BASE = 'http://localhost:8000/preferences';
  const prefID = '5b15feaa022b3c85cf520a52';

  const data = axios.get(`${API_BASE}/${prefID}`);
  return data;
};

export const savePreferences = async () => {
  const API_BASE = 'http://localhost:8000/preferences';
  const prefID = '5b15feaa022b3c85cf520a52';

  try {
    const data = { ...this.state };
    const reqBody = {
      method: 'PUT',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url: `${API_BASE}/${prefID}`,
    };

    const response = await axios(reqBody);
    console.log(response);
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};


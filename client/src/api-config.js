export const API_ROOT = () => {
  let host;

  const hostname = window && window.location && window.location.hostname;

  if (hostname === 'spokes.now.sh') {
    host = 'https://spokes.now.sh';
  } else {
    host = 'http://localhost:8000';
  }

  return host;
};

export const WEATHER_API_ROOT = () => {
  const host = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
  const apiKey = 'dac7582d3a0c433db2c25733180206';

  return `${host}?key=${apiKey}`;
};

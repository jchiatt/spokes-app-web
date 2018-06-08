import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ forecast }) => {
  const {
    time, tempF, tempC, humidity, chanceofrain, windspeedMiles,
  } = forecast;

  const timeObj = new Date(time);
  const formattedLocalTime = timeObj.toLocaleTimeString('en-US', { hour12: true });

  return (
    <div>
      <p>Time: {formattedLocalTime}</p>
      <p>Temperature F: {tempF}</p>
      <p>Temperature C: {tempC}</p>
      <p>Humidity: {humidity}</p>
      <p>Rain Chance: {chanceofrain}</p>
      <p>Wind Speed: {windspeedMiles}</p>
    </div>
  );
};
export default Time;

Time.propTypes = {
  forecast: PropTypes.object.isRequired, // eslint-disable-line
};


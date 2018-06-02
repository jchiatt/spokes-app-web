import React from 'react';
import PropTypes from 'prop-types';

import Status from '../components/today/Status';
import LocationSearch from '../components/today/LocationSearch';

const Today = ( { current_condition, forecast, loggedIn, handleSession, updateWeather } ) => (
  <div>
    <h1>Today</h1>
    {!loggedIn &&
      <div>
        <p>Enter your Zip code to get started</p>
        <LocationSearch
          handleSession={handleSession}
          updateWeather={updateWeather}
        />
      </div>
    }

    {loggedIn &&
      <Status
        current_condition={current_condition}
        forecast={forecast[0]}
      />
    }

  </div>
);

export default Today;

Today.propTypes = {
  current_condition: PropTypes.object.isRequired, // eslint-disable-line
  forecast: PropTypes.array.isRequired, // eslint-disable-line
  loggedIn: PropTypes.bool.isRequired, // eslint-disable-line
  handleSession: PropTypes.func.isRequired,
  updateWeather: PropTypes.func.isRequired,
};

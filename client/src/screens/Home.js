import React from 'react';
import PropTypes from 'prop-types';

import LocationSearch from '../components/global/LocationSearch';

const Home = ({ handleSession, updateWeather }) => (
  <div>
    <h1>Welcome to Spokes</h1>

    <LocationSearch
      handleSession={handleSession}
      updateWeather={updateWeather}
    />
  </div>
);

export default Home;

Home.propTypes = {
  handleSession: PropTypes.func.isRequired,
  updateWeather: PropTypes.func.isRequired,
};

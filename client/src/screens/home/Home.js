import React from 'react';
import PropTypes from 'prop-types';

import LocationSearch from '../../components/global/LocationSearch';

const Home = ({ updateWeather }) => (
  <div>
    <LocationSearch
      updateWeather={updateWeather}
    />
  </div>
);

export default Home;

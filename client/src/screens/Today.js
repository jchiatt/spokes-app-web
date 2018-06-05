import React from 'react';
import PropTypes from 'prop-types';

import Status from '../components/today/Status';

const Today = ({
  currentCondition, forecast, loggedIn,
}) => (
  <div>
    <h1>Today</h1>
    {loggedIn &&
      <Status
        currentCondition={currentCondition}
        forecast={forecast[0]}
      />
    }

  </div>
);

export default Today;

Today.propTypes = {
  currentCondition: PropTypes.object.isRequired, // eslint-disable-line
  forecast: PropTypes.array.isRequired, // eslint-disable-line
  loggedIn: PropTypes.bool.isRequired, // eslint-disable-line
};

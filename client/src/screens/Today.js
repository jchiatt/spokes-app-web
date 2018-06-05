import React from 'react';
import PropTypes from 'prop-types';

import Status from '../components/today/Status';

const Today = ({
  current_condition, forecast, loggedIn,
}) => (
  <div>
    <h1>Today</h1>
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
};

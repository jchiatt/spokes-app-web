import React from 'react';
import PropTypes from 'prop-types';

import Status from '../../screens/today/Status';

const Today = ({
  currentCondition, loggedIn,
}) => (
  <div>
    <h1>Today</h1>
    {loggedIn &&
    <Status
      currentCondition={currentCondition}
    />
  }
  </div>
);

export default Today;

Today.propTypes = {
  currentCondition: PropTypes.object.isRequired, // eslint-disable-line
  loggedIn: PropTypes.bool.isRequired, // eslint-disable-line
};

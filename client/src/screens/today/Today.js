import React from 'react';
import PropTypes from 'prop-types';

import Status from '../../screens/today/Status';

const Today = () => (
  <div>
    <h1>Today</h1>
    <Status />
  </div>
);

export default Today;

Today.propTypes = {
  currentCondition: PropTypes.object.isRequired, // eslint-disable-line
  loggedIn: PropTypes.bool.isRequired, // eslint-disable-line
};

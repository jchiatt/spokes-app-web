import React from 'react';
import PropTypes from 'prop-types';

import AddPreferences from '../preferences/AddPreferences';
import Day from '../components/global/Day';

const Preferences = ({ preferences, updatePrefs }) => (
  <div>
    <h1>Preferences</h1>

    <AddPreferences preferences={preferences} updatePrefs={updatePrefs} />

    <h2>Past days you enjoyed riding</h2>
    <Day />
    <Day />
    <Day />
  </div>
);

export default Preferences;

Preferences.propTypes = {
  preferences: PropTypes.object.isRequired, // eslint-disable-line
  updatePrefs: PropTypes.func.isRequired,
};

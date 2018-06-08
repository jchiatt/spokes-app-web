import React from 'react';

import AddPreferences from './AddPreferences';
import Day from '../../components/global/Day';

const Preferences = () => (
  <div>
    <h1>Preferences</h1>

    <AddPreferences />

    <h2>Past days you enjoyed riding</h2>
    <Day />
    <Day />
    <Day />
  </div>
);

export default Preferences;

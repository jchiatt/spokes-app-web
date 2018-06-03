import React from 'react';
import Overdrive from 'react-overdrive';

import Day from '../components/global/Day';

const Forecast = () => (
  <Overdrive id="page">
    <div>
      <h1>Forecast</h1>

      <h2>Over the next 7 days, here's the best days to ride</h2>

      <Day />
      <Day />

      <h2>These days don't look so good</h2>

      <Day />
      <Day />
      <Day />

    </div>
  </Overdrive>
);

export default Forecast;

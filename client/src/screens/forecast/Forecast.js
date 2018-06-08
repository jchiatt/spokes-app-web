import React from 'react';

import Day from '../../components/global/Day';

const Forecast = () => (
  <div>
    <h1>Forecast</h1>

    <h2>Over the next 7 days, here&apos;s the best days to ride</h2>

    <Day />
    <Day />

    <h2>These days don&apos;t look so good</h2>

    <Day />
    <Day />
    <Day />

  </div>
);

export default Forecast;

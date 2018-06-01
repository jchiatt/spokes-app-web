import React from 'react';

import Day from '../components/global/Day';

const Forecast = () => {
  return (
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
  )
}

export default Forecast;
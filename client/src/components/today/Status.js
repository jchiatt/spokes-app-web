import React from 'react';

import Rank from './Rank';

const Status = () => {
  return(
    <div>
      <h2>Oh, how swell! Looks like today is a great day to ride.</h2>
      <h3>Temperature</h3>
      <p>Today's high is 72 &#8457; / 22 &#8451;</p>
      <p>Right now, it's 72 &#8457; / 22 &#8451;</p>

      <h3>Wind</h3>
      <p>Current wind speed is 4 mph</p>

      <h3>Precipitation</h3>
      <p>Precipitation is highly unlikely.</p>

      <Rank />
    </div>
  )
}

export default Status;
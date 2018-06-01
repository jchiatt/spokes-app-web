import React from 'react';

import Status from '../components/today/Status';
import LocationSearch from '../components/today/LocationSearch';

const Today = () => {
  return(
    <div>
      <h1>Today</h1>
      <Status />
      <LocationSearch />
    </div>
  )
}

export default Today;
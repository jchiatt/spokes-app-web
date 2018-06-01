import React from 'react';
import Day from '../components/global/Day';

const Preferences = () => {
  return(
    <div>
      <h1>Preferences</h1>

      <form>
        <h2>Temperature Range</h2>
        <label>Low
          <input type="text" />
        </label>

        <label>High
          <input type="text" />
        </label>

        <hr />

        <h2>Wind Speed Range</h2>
        <label>Low
          <input type="text" />
        </label>

        <label>High
          <input type="text" />
        </label>

        <hr />

        <h2>Preciptation Chance</h2>
        <label>Low
          <input type="text" />
        </label>

        <label>High
          <input type="text" />
        </label>

        <label>Enjoy going right after a rain?
          <input type="checkbox" />
        </label>

        <hr />

      </form>

      <h2>Past days you enjoyed riding</h2>
      <Day />
      <Day />
      <Day />
    </div>
  )
}

export default Preferences;
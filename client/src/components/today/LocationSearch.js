/* eslint jsx-a11y/no-autofocus: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Overdrive from 'react-overdrive';

export default class LocationSearch extends Component {
  static propTypes = {
    handleSession: PropTypes.func.isRequired,
    updateWeather: PropTypes.func.isRequired,
  }

  state = {
    zip: '',
  }

  // Update 'zip' in state as long as the input is a number
  updateZip = (event) => {
    !isNaN(event.target.value) ? this.setState({ zip: event.target.value }) : console.log(event.target.value = ' is not a number'); // eslint-disable-line
  }

  handleZipSubmit = (event) => {
    event.preventDefault();

    // API info. Would move this to the backend in production
    const API_BASE = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
    const API_KEY = 'dac7582d3a0c433db2c25733180206';

    // Get current weather and 7 day forecast from API
    const getZipWeather = async () => {
      try {
        const data = await axios.get(`${API_BASE}?key=${API_KEY}&q=${this.state.zip}&num_of_days=7&format=json`);

        // Update state with weather data
        this.props.updateWeather(data.data.data);

        // Log in the user
        this.props.handleSession();
      } catch (err) {
        console.log(err); // eslint-disable-line
      }
    };

    getZipWeather();
  }

  render() {
    return (
      <Overdrive id="page">
        <div>
          <form onSubmit={this.handleZipSubmit}>
            <label htmlFor="zip-input">Zip code:
              <input
                name="zip-input"
                type="text"
                pattern="[0-9]{5}"
                value={this.state.zip}
                onChange={this.updateZip}
                autoFocus
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </Overdrive>
    );
  }
}

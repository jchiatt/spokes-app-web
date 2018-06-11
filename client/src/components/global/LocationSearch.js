/* eslint jsx-a11y/no-autofocus: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { WEATHER_API_ROOT } from '../../api-config';

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

    // Get current weather and 7 day forecast from API
    const getZipWeather = async () => {
      try {
        const data = await axios.get(`${WEATHER_API_ROOT()}&q=${this.state.zip}&num_of_days=7&format=json`);

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
      <SearchContainer>

        <h1>Welcome to Spokes</h1>
        <p>Enter your Zip code to get started</p>

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
      </SearchContainer>
    );
  }
}


const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;

  form input {
    margin: 5px;
  }
`;

/* eslint jsx-a11y/no-autofocus: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleSession } from '../../actions';
import { getForecast } from '../../screens/today/actions';

class LocationSearch extends Component {
  static propTypes = {
    handleSession: PropTypes.func.isRequired,
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

    const { getForecast, handleSession } = this.props; // eslint-disable-line

    getForecast(this.state.zip);

    handleSession();
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

const mapDispatchToProps = dispatch => bindActionCreators({
  handleSession,
  getForecast,
}, dispatch);

export default connect(null, mapDispatchToProps)(LocationSearch);

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;

  form input {
    margin: 5px;
  }
`;

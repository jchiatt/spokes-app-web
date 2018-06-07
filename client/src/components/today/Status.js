/* eslint camelcase: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPreferences } from '../../preferences/actions';

import Time from './Time';
import Rank from './Rank';

class Status extends Component {
  static propTypes = {
    currentCondition: PropTypes.shape({
      temp_F: PropTypes.Int,
      temp_C: PropTypes.Int,
      windspeedMiles: PropTypes.Int,
    }).isRequired,
    forecast: PropTypes.object.isRequired, // eslint-disable-line
    preferences: PropTypes.object.isRequired, // eslint-disable-line
  }

  componentDidMount() {
    const { getPreferences, preferencesLoaded } = this.props;
    !preferencesLoaded ? getPreferences() : this.goodIntervals;
  }

  /*
    API Data for day-by-day forecast is returned in 3 hour intervals
    This function determines which, if any, 3 hour intervals line up with the user's preferences
  */
  goodIntervals = () => {
    const { preferences } = this.props;
    const goodIntervals = this.props.forecast.hourly
      .filter(interval => (
        interval.tempF >= preferences.minTempF &&
        interval.tempF <= preferences.maxTempF
      ))
      .filter(interval => (
        interval.tempC >= preferences.minTempC &&
        interval.tempC <= preferences.maxTempC
      ))
      .filter(interval => (
        interval.humidity >= preferences.minHumidity &&
        interval.humidity <= preferences.maxHumidity
      ))
      .filter(interval => (
        interval.windspeedMiles >= preferences.minWindSpeed &&
        interval.windspeedMiles <= preferences.maxWindSpeed
      ))
      .filter(interval => (
        interval.chanceofrain >= preferences.minRainChance &&
        interval.chanceofrain <= preferences.maxRainChance
      ));

    return goodIntervals.length >= 4 ? console.log('good day') : console.log('not a good day');
  }

  /*
    API only contains rain chance inside of hourly data.
    So, we have to add all the hourly chances up to get the average chance for the day.
    (which is probably not how weather actually works, but this is a demo ¯\_(ツ)_/¯)
  */

  calculateRainChance = () => {
    // Grab all the rain chances from each hourly array
    const rainChancesTotal = this.props.forecast.hourly.reduce((total, current) => total + parseInt(current.chanceofrain, 10), 0); // eslint-disable-line

    // Calculate today's rain chance
    const rainChance = Math.ceil(rainChancesTotal / this.props.forecast.hourly.length);

    // Decide what message to show the user, based on today's chance of rain
    let rainMessage;

    switch (true) {
      case rainChance === 0:
        rainMessage = 'No rain today!';
        break;
      case rainChance > 0 && rainChance < 20:
        rainMessage = 'Rain is highly unlikely.';
        break;
      case rainChance > 20 && rainChance < 50:
        rainMessage = 'It may rain today.';
        break;
      case rainChance > 50 && rainChance < 80:
        rainMessage = "There's a good chance it'll rain today.";
        break;
      case rainChance >= 80:
        rainMessage = "It's probably going to rain today.";
        break;
      default:
        break;
    }

    return rainMessage;
  }

  render() {
    // Grab variables out of props
    const { temp_F, temp_C, windspeedMiles } = this.props.currentCondition;
    const {
      maxtempF, maxtempC, mintempF, mintempC,
    } = this.props.forecast;
    const rainMessage = this.calculateRainChance();

    const { preferencesLoaded } = this.props;

    if (!preferencesLoaded) return <h1>Loading...</h1>;

    return (
      <div>
        <h2>Oh, how swell! Looks like today is a great day to ride.</h2>

        <h2>Today&apos;s Conditions</h2>
        <h3>Temperature</h3>
        <p>Today&apos;s high is {maxtempF}&#8457; / {maxtempC}&#8451;</p>
        <p>Today&apos;s low is {mintempF}&#8457; / {mintempC}&#8451;</p>
        <p>Right now, it&apos;s {temp_F}&#8457; / {temp_C}&#8451;</p>

        <h3>Wind</h3>
        <p>Current wind speed is {windspeedMiles} mph</p>

        <h3>Precipitation</h3>
        <p>{rainMessage}</p>

        <h2>Best times to ride today</h2>

        {this.props.forecast.hourly.map(interval => <Time forecast={interval} key={interval.time} />)}

        <Rank />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  preferences: state.preferences.preferences,
  preferencesLoaded: state.preferences.preferencesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPreferences,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Status);

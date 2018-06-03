import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rank from './Rank';

class Status extends Component {
  static propTypes = {
    current_condition: PropTypes.object.isRequired,
    forecast: PropTypes.object.isRequired
  }

  // API only contains rain chance inside of hourly data, so we have to add all the hourly chances up to get the average chance for the day (which is probably not how weather actually works, but this is a demo ¯\_(ツ)_/¯)
  calculateRainChance = () => {
    // Grab all the rain chances from each hourly array
    const rainChancesTotal = this.props.forecast.hourly.reduce( function( total, current ) {
      return total + parseInt(current.chanceofrain, 10)
    }, 0)
      
    // Calculate today's rain chance
    const rainChance = Math.ceil( rainChancesTotal / this.props.forecast.hourly.length )
    rainChance > 0 && rainChance < 20 ? console.log("true") : console.log(false)

    // Decide what message to show the user, based on today's chance of rain
    let rainMessage;

    switch( true ) {
      case rainChance === 0 :
        rainMessage = "No rain today!";
        break;
      case rainChance > 0 && rainChance < 20 :
        rainMessage = "Rain is highly unlikely.";
        break;
      case rainChance > 20 && rainChance < 50 :
        rainMessage = "It may rain today.";
        break;
      case rainChance > 50 && rainChance < 80 :
        rainMessage = "There's a good chance it'll rain today.";
        break;
      case rainChance >= 80 :
        rainMessage = "It's probably going to rain today.";
        break;
      default:
        break;
    }
    
    return rainMessage;
  }

  render() {
    // Grab variables out of props
    const {temp_F, temp_C, windspeedMiles } = this.props.current_condition
    const { maxtempF, maxtempC, mintempF, mintempC } = this.props.forecast
    const rainMessage = this.calculateRainChance();
    
    return(
      <div>
        <h2>Oh, how swell! Looks like today is a great day to ride.</h2>
        <h3>Temperature</h3>
        <p>Today's high is {maxtempF}&#8457; / {maxtempC}&#8451;</p>
        <p>Today's low is {mintempF}&#8457; / {mintempC}&#8451;</p>
        <p>Right now, it's {temp_F}&#8457; / {temp_C}&#8451;</p>
  
        <h3>Wind</h3>
        <p>Current wind speed is {windspeedMiles} mph</p>
  
        <h3>Precipitation</h3>
        <p>{rainMessage}</p>
  
        <Rank />
      </div>
    )
  }
}

export default Status;
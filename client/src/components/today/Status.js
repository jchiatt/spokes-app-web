import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rank from './Rank';

class Status extends Component {
  static propTypes = {
    current_condition: PropTypes.object.isRequired,
    forecast: PropTypes.object.isRequired
  }

  render() {
    const {temp_F, temp_C, windspeedMiles } = this.props.current_condition
    const { maxtempF, maxtempC, mintempF, mintempC } = this.props.forecast

    const calculateRainChance = () => {
    
      const rainChancesTotal = this.props.forecast.hourly.reduce( function( total, current ) {
        return total + parseInt(current.chanceofrain, 10)
      }, 0)
        
      const rainChance = Math.ceil( rainChancesTotal / this.props.forecast.hourly.length )
      
      switch( rainChance ) {
        case ( rainChance === 0 ) :
          return "No rain today!"
        case ( rainChance > 0 && rainChance < 20 ) :
          return "Rain is highly unlikely."
        case ( rainChance > 20 && rainChance < 50 ) :
          return "It may rain today."
        case ( rainChance > 50 && rainChance < 80 ) :
          return "There's a good chance it'll rain today."
        case ( rainChance >= 80 ) :
          return "It's probably going to rain today."
        default :
          break
      }
      
    }

    calculateRainChance();
    
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
        <p>Precipitation is highly unlikely.</p>
  
        <Rank />
      </div>
    )
  }
}

export default Status;
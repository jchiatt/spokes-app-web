import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Status from '../components/today/Status';
import LocationSearch from '../components/today/LocationSearch';

class Today extends Component {
  static propTypes = {
    current_condition: PropTypes.object.isRequired,
    forecast: PropTypes.array.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    handleSession: PropTypes.func.isRequired,
    updateWeather: PropTypes.func.isRequired
  }

  render() {
    return(
      <div>
        <h1>Today</h1>
        {!this.props.loggedIn &&
          <div>
            <p>Enter your Zip code to get started</p>
            <LocationSearch 
              handleSession={this.props.handleSession} 
              updateWeather={this.props.updateWeather} 
            />
          </div>
        }

        {this.props.loggedIn &&
          <Status 
            current_condition={this.props.current_condition}
            forecast={this.props.forecast[0]}
          />
        }
        
      </div>
    )
  }
}

export default Today;
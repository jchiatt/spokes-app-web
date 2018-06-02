import React, { Component } from 'react';

import Status from '../components/today/Status';
import LocationSearch from '../components/today/LocationSearch';

class Today extends Component {
  
  render() {
    return(
      <div>
        <h1>Today</h1>
        {!this.props.loggedIn &&
          <div>
            <p>Enter your Zip code to get started</p>
            <LocationSearch />
          </div>
        }

        {this.props.loggedIn &&
          <Status />
        }
        
      </div>
    )
  }
}

export default Today;
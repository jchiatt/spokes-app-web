import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class LocationSearch extends Component {
  static propTypes = {
    handleSession: PropTypes.func.isRequired,
    updateWeather: PropTypes.func.isRequired
  }
  
  state = {
    zip: ''
  }

  updateZip = ( event ) => {
    !isNaN(event.target.value) ? this.setState( { zip: event.target.value }) : console.log(event.target.value = " is not a number");
  }

  handleZipSubmit = ( event ) => {
    event.preventDefault();
    
    const API_BASE  = "https://api.worldweatheronline.com/premium/v1/weather.ashx";
    const API_KEY   = "dac7582d3a0c433db2c25733180206";
    
    const getZipWeather = async () => { 
      try {
        const data = await axios.get(API_BASE + "?key=" + API_KEY + "&q=" + this.state.zip + "&num_of_days=7&format=json")

        this.props.updateWeather( data.data.data );
        this.props.handleSession();

      } catch ( err ) {
        console.log( err )
      }
    }

    getZipWeather();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleZipSubmit}>
          <label>Zip code:
            <input type="text" pattern="[0-9]{5}" value={this.state.zip} onChange={this.updateZip} autoFocus />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

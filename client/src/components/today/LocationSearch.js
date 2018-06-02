import React, { Component } from 'react';
import axios from 'axios';

export default class LocationSearch extends Component {
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
    
    axios.get("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=" + API_KEY + "&q=" + this.state.zip + "&num_of_days=1&format=json")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleZipSubmit}>
          <label>Zip code:
            <input type="text" pattern="[0-9]{5}" value={this.state.zip} onChange={this.updateZip} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

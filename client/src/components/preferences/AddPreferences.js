import React, { Component } from 'react';
import axios from 'axios';

class AddPreferences extends Component {
  state = {
    maxTempF: 0,
    maxTempC: 0,
    minTempF: 0,
    minTempC: 0,
    minWindSpeed: 0,
    maxWindSpeed: 0,
    minHumidity: 0,
    maxHumidity: 0,
    minRainChance: 0,
    maxRainChance: 0,
  }

  componentDidMount() {
    this.getPreferences();
  }

  onChange = (key, value) => {
    this.setState({ [key]: value });
  }

  getPreferences = async () => {
    const API_BASE = 'http://localhost:8000/preferences';
    const prefID = '5b15feaa022b3c85cf520a52';

    try {
      const data = await axios.get(`${API_BASE}/${prefID}`);

      this.setState({
        maxTempF: parseInt(data.data.maxTempF, 10),
        maxTempC: parseInt(data.data.maxTempC, 10),
        minTempF: parseInt(data.data.minTempF, 10),
        minTempC: parseInt(data.data.minTempC, 10),
        minWindSpeed: parseInt(data.data.minWindSpeed, 10),
        maxWindSpeed: parseInt(data.data.maxWindSpeed, 10),
        minHumidity: parseInt(data.data.minHumidity, 10),
        maxHumidity: parseInt(data.data.maxHumidity, 10),
        minRainChance: parseInt(data.data.minRainChance, 10),
        maxRainChance: parseInt(data.data.maxRainChance, 10),
      });
    } catch (err) {
      console.log(err);
    }
  }

  savePreferences = async () => {
    const API_BASE = 'http://localhost:8000/preferences';
    const prefID = '5b15feaa022b3c85cf520a52';

    try {
      const data = { ...this.state };
      console.log(data);
      const reqBody = {
        method: 'PUT',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        url: `${API_BASE}/${prefID}`,
      };

      axios(reqBody);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Temperature Range</h2>
          <input
            value={this.state.maxTempF}
            onChange={event => this.onChange('maxTempF', event.target.value)}
            placeholder="Max F Temp"
          />
          <input
            value={this.state.minTempF}
            onChange={event => this.onChange('minTempF', event.target.value)}
            placeholder="Min F Temp"
          />
          <input
            value={this.state.maxTempC}
            onChange={event => this.onChange('maxTempC', event.target.value)}
            placeholder="Max C Temp"
          />
          <input
            value={this.state.minTempC}
            onChange={event => this.onChange('minTempC', event.target.value)}
            placeholder="Min C Temp"
          />
        </div>

        <div>
          <h2>Wind Speed Range</h2>
          <input
            value={this.state.minWindSpeed}
            onChange={event => this.onChange('minWindSpeed', event.target.value)}
            placeholder="Min Wind Speed"
          />
          <input
            value={this.state.maxWindSpeed}
            onChange={event => this.onChange('maxWindSpeed', event.target.value)}
            placeholder="Max Wind Speed"
          />
        </div>

        <div>
          <h2>Humidity Range</h2>
          <input
            value={this.state.minHumidity}
            onChange={event => this.onChange('minHumidity', event.target.value)}
            placeholder="Min Humidity"
          />
          <input
            value={this.state.maxHumidity}
            onChange={event => this.onChange('maxHumidity', event.target.value)}
            placeholder="Max Humidity"
          />
        </div>

        <div>
          <h2>Rain Chance</h2>
          <input
            value={this.state.minRainChance}
            onChange={event => this.onChange('minRainChance', event.target.value)}
            placeholder="Min Rain Chance"
          />
          <input
            value={this.state.maxRainChance}
            onChange={event => this.onChange('maxRainChance', event.target.value)}
            placeholder="Max Rain Chance"
          />
        </div>

        <div>
          <button onClick={this.savePreferences}>Save Preferences</button>
        </div>
      </div>
    );
  }
}

export default AddPreferences;

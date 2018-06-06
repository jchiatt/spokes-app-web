import React, { Component } from 'react';
import { getPreferences, savePreferences } from '../../api/preferences';

class AddPreferences extends Component {
  state = {
    maxTempF: '',
    maxTempC: '',
    minTempF: '',
    minTempC: '',
    minWindSpeed: '',
    maxWindSpeed: '',
    minHumidity: '',
    maxHumidity: '',
    minRainChance: '',
    maxRainChance: '',
    updatedMessage: false,
  }

  componentDidMount() {
    getPreferences().then((res) => {
      this.setState({
        ...res.data,
      });
    });
  }

  onChange = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const toggleMessage = () => {
      this.setState({
        updatedMessage: !this.state.updatedMessage,
      });
    };

    const updatePrefs = () => {
      savePreferences(this.state).then(() => {
        toggleMessage();
        setTimeout(toggleMessage, 2000);
      });
    };

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
          <button onClick={updatePrefs}>Save Preferences</button>

          {this.state.updatedMessage &&
            <p>Successfully updated</p>
          }
        </div>
      </div>
    );
  }
}

export default AddPreferences;

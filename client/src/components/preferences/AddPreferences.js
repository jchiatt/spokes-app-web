import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPreferences extends Component {
  state = {
    maxTempF: this.props.preferences.maxTempF,
    minTempF: this.props.preferences.minTempF,
    maxTempC: this.props.preferences.maxTempC,
    minTempC: this.props.preferences.minTempC,
    maxWindSpeed: this.props.preferences.maxWindSpeed,
    minWindSpeed: this.props.preferences.minWindSpeed,
    maxHumidity: this.props.preferences.maxHumidity,
    minHumidity: this.props.preferences.minHumidity,
    maxRainChance: this.props.preferences.maxRainChance,
    minRainChance: this.props.preferences.minRainChance,
    updatedMessage: false,
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const toggleMessage = () => {
      this.setState({
        updatedMessage: !this.state.updatedMessage,
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
          <button
            onClick={() => {
              this.props.updatePrefs(this.state);
              toggleMessage();
              setTimeout(toggleMessage, 2000);
            }}
          >Save Preferences
          </button>

          {this.state.updatedMessage &&
            <p>Successfully updated</p>
          }
        </div>
      </div>
    );
  }
}

export default AddPreferences;

AddPreferences.propTypes = {
  preferences: PropTypes.object.isRequired, // eslint-disable-line
  updatePrefs: PropTypes.func.isRequired,
};


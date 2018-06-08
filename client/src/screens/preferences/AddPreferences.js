import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPreferences, savePreferences } from './actions';

class AddPreferences extends Component {
  state = {
    preferences: {},
    updatedMessage: false,
  }

  componentDidMount() {
    const { getPreferences, preferencesLoaded } = this.props; // eslint-disable-line
    if (!preferencesLoaded) {
      getPreferences();
    }
  }

  onChange = (key, value) => {
    this.setState({
      preferences: {
        ...this.state.preferences,
        [key]: value,
      },
    });
  }

  render() {
    const { preferences, preferencesLoaded } = this.props;

    const toggleMessage = () => {
      this.setState({
        updatedMessage: !this.state.updatedMessage,
      });
    };

    if (!preferencesLoaded) return <h1>Loading...</h1>;

    return (
      <div>
        <div>
          <h2>Temperature Range</h2>
          <input
            defaultValue={preferences.maxTempF}
            onChange={event => this.onChange('maxTempF', event.target.value)}
            placeholder="Max F Temp"
          />
          <input
            defaultValue={preferences.minTempF}
            onChange={event => this.onChange('minTempF', event.target.value)}
            placeholder="Min F Temp"
          />
          <input
            defaultValue={preferences.maxTempC}
            onChange={event => this.onChange('maxTempC', event.target.value)}
            placeholder="Max C Temp"
          />
          <input
            defaultValue={preferences.minTempC}
            onChange={event => this.onChange('minTempC', event.target.value)}
            placeholder="Min C Temp"
          />
        </div>

        <div>
          <h2>Wind Speed Range</h2>
          <input
            defaultValue={preferences.minWindSpeed}
            onChange={event => this.onChange('minWindSpeed', event.target.value)}
            placeholder="Min Wind Speed"
          />
          <input
            defaultValue={preferences.maxWindSpeed}
            onChange={event => this.onChange('maxWindSpeed', event.target.value)}
            placeholder="Max Wind Speed"
          />
        </div>

        <div>
          <h2>Humidity Range</h2>
          <input
            defaultValue={preferences.minHumidity}
            onChange={event => this.onChange('minHumidity', event.target.value)}
            placeholder="Min Humidity"
          />
          <input
            defaultValue={preferences.maxHumidity}
            onChange={event => this.onChange('maxHumidity', event.target.value)}
            placeholder="Max Humidity"
          />
        </div>

        <div>
          <h2>Rain Chance</h2>
          <input
            defaultValue={preferences.minRainChance}
            onChange={event => this.onChange('minRainChance', event.target.value)}
            placeholder="Min Rain Chance"
          />
          <input
            defaultValue={preferences.maxRainChance}
            onChange={event => this.onChange('maxRainChance', event.target.value)}
            placeholder="Max Rain Chance"
          />
        </div>

        <div>
          <button
            onClick={() => {
              this.props.savePreferences({ ...preferences, ...this.state.preferences });
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

const mapStateToProps = state => ({
  preferences: state.preferences.preferences,
  preferencesLoaded: state.preferences.preferencesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPreferences,
  savePreferences,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddPreferences);

AddPreferences.propTypes = {
  preferences: PropTypes.object.isRequired, // eslint-disable-line
  getPreferences: PropTypes.func.isRequired,
  savePreferences: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPreferences } from './actions';

class AddPreferences extends Component {
  state = {
    updatedMessage: false,
  }

  componentDidMount() {
    const { getPreferences, preferencesLoaded } = this.props;
    if (!preferencesLoaded) {
      getPreferences();
    }
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
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
            value={preferences.maxTempF}
            onChange={event => this.onChange('maxTempF', event.target.value)}
            placeholder="Max F Temp"
          />
          <input
            value={preferences.minTempF}
            onChange={event => this.onChange('minTempF', event.target.value)}
            placeholder="Min F Temp"
          />
          <input
            value={preferences.maxTempC}
            onChange={event => this.onChange('maxTempC', event.target.value)}
            placeholder="Max C Temp"
          />
          <input
            value={preferences.minTempC}
            onChange={event => this.onChange('minTempC', event.target.value)}
            placeholder="Min C Temp"
          />
        </div>

        <div>
          <h2>Wind Speed Range</h2>
          <input
            value={preferences.minWindSpeed}
            onChange={event => this.onChange('minWindSpeed', event.target.value)}
            placeholder="Min Wind Speed"
          />
          <input
            value={preferences.maxWindSpeed}
            onChange={event => this.onChange('maxWindSpeed', event.target.value)}
            placeholder="Max Wind Speed"
          />
        </div>

        <div>
          <h2>Humidity Range</h2>
          <input
            value={preferences.minHumidity}
            onChange={event => this.onChange('minHumidity', event.target.value)}
            placeholder="Min Humidity"
          />
          <input
            value={preferences.maxHumidity}
            onChange={event => this.onChange('maxHumidity', event.target.value)}
            placeholder="Max Humidity"
          />
        </div>

        <div>
          <h2>Rain Chance</h2>
          <input
            value={preferences.minRainChance}
            onChange={event => this.onChange('minRainChance', event.target.value)}
            placeholder="Min Rain Chance"
          />
          <input
            value={preferences.maxRainChance}
            onChange={event => this.onChange('maxRainChance', event.target.value)}
            placeholder="Max Rain Chance"
          />
        </div>

        <div>
          <button
            onClick={() => {
              this.props.updatePrefs(preferences);
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
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddPreferences);

AddPreferences.propTypes = {
  preferences: PropTypes.object.isRequired, // eslint-disable-line
  updatePrefs: PropTypes.func.isRequired,
};


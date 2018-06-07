/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import styled from 'styled-components';

import { getPreferences, savePreferences } from './api/preferences';

import Header from './components/global/Header';
import Home from './screens/Home';
import Today from './screens/Today';
import Forecast from './screens/Forecast';
import Preferences from './screens/Preferences';

class App extends Component {
  state = {
    current_condition: {},
    loggedIn: false,
    forecast: [],
    preferences: {},
  }

  componentDidMount() {
    getPreferences().then((res) => {
      this.setState({
        preferences: {
          ...res.data,
        },
      });
    });
  }

  // A fake-it function to handle login/logout. Could be used for actual auth later on.
  handleSession = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }

  // Updates the state of weather conditions after a ZIP is searched
  updateWeather = (data) => {
    this.setState({
      current_condition: data.current_condition[0],
      forecast: data.weather,
    });
  }

  updatePrefs = async (prefs) => {
    await this.setState({
      preferences: prefs,
    });
    await savePreferences(this.state.preferences);
  };

  render() {
    return (
      <Router>
        <div>
          <Header handleSession={this.handleSession} loggedIn={this.state.loggedIn} />

          <AppContainer>
            <Switch>
              {this.state.loggedIn ? (
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Today
                      currentCondition={this.state.current_condition}
                      forecast={this.state.forecast}
                      loggedIn={this.state.loggedIn}
                      preferences={this.state.preferences}
                    />)}
                />
              ) : (
                <Home
                  handleSession={this.handleSession}
                  updateWeather={this.updateWeather}
                />
              )}

              {this.state.loggedIn ? (
                <Route path="/forecast" component={Forecast} />
              ) : (
                <Redirect to="/" />
              )}
              {this.state.loggedIn ? (
                <Route
                  path="/preferences"
                  component={() => (
                    <Preferences
                      preferences={this.state.preferences}
                      updatePrefs={this.updatePrefs}
                    />)}
                />
              ) : (
                <Redirect to="/" />
              )}

            </Switch>
          </AppContainer>
        </div>
      </Router>
    );
  }
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/global/Header';
import Today from './screens/Today';
import Forecast from './screens/Forecast';
import Preferences from './screens/Preferences';

class App extends Component {
  state = {
    current_condition: {},
    loggedIn: false,
    forecast: [],
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

  render() {
    return (
      <Router>
        <div>
          <Header handleSession={this.handleSession} loggedIn={this.state.loggedIn} />

          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Today
                  current_condition={this.state.current_condition}
                  forecast={this.state.forecast}
                  loggedIn={this.state.loggedIn}
                  handleSession={this.handleSession}
                  updateWeather={this.updateWeather}
                />)}
            />
            {this.state.loggedIn ? (
              <Route path="/forecast" component={Forecast} />
            ) : (
              <Redirect to="/" />
            )}
            {this.state.loggedIn ? (
              <Route path="/preferences" component={Preferences} />
            ) : (
              <Redirect to="/" />
            )}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

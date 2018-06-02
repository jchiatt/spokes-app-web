import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import logo from './logo.svg';

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
          <header>
            <img src={logo} alt="logo" />
            <ul>
              <li><Link to="/">Today</Link></li>
              <li><Link to="/forecast">Forecast</Link></li>
              <li><Link to="preferences">Preferences</Link></li>
            </ul>

            <ul>
              {!this.state.loggedIn &&
                <li onClick={this.handleSession}>Log in</li>
              }
              {this.state.loggedIn &&
                <li onClick={this.handleSession}>Log out</li>
              }
            </ul>

            <hr />
          </header>

          <Route
            exact
            path="/"
            component={() => (<Today
              current_condition={this.state.current_condition}
              forecast={this.state.forecast}
              loggedIn={this.state.loggedIn}
              handleSession={this.handleSession}
              updateWeather={this.updateWeather}
            />)}
          />
          <Route path="/forecast" component={Forecast} />
          <Route path="/preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

export default App;

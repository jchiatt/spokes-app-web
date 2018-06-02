import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Today from './screens/Today';
import Forecast from './screens/Forecast';
import Preferences from './screens/Preferences';

class App extends Component {

  state = {
    loggedIn: false,
  }

  handleSession = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <Router>
        <div>
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

          <Route exact path="/" component={() => <Today loggedIn={this.state.loggedIn} />} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

export default App;

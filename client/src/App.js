import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Today from './screens/Today';
import Forecast from './screens/Forecast';
import Preferences from './screens/Preferences';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Today</Link></li>
            <li><Link to="/forecast">Forecast</Link></li>
            <li><Link to="preferences">Preferences</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Today} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

export default App;

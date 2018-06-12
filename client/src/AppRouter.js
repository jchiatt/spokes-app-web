/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './components/global/Header';
import Home from './screens/home/Home';
import Today from './screens/today/Today';
import Forecast from './screens/forecast/Forecast';
import Preferences from './screens/preferences/Preferences';

class App extends Component {
  static propTypes = {
    session: PropTypes.shape({
      loggedIn: PropTypes.bool,
    }).isRequired,
    weather: PropTypes.shape({
      weatherLoaded: PropTypes.bool.isRequired,
    }).isRequired,
  }

  render() {
    const { loggedIn } = this.props.session;
    const { weatherLoaded } = this.props.weather;

    return (
      <Router>
        <Fragment>
          <Header loggedIn={loggedIn} />
          <AppContainer>
            <Switch>
              {loggedIn && weatherLoaded ? (
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Today />)}
                />
            ) : (
              <Home
                updateWeather={this.updateWeather}
              />
            )}

              {loggedIn ? (
                <Route path="/forecast" component={Forecast} />
            ) : (
              <Redirect to="/" />
            )}
              {loggedIn ? (
                <Route
                  path="/preferences"
                  component={() => (
                    <Preferences />)}
                />
              ) : (
                <Redirect to="/" />
              )}

            </Switch>
          </AppContainer>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
  weather: state.weather,
});

export default connect(mapStateToProps)(App);


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

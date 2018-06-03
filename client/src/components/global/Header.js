/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';

const Header = ({ handleSession, loggedIn }) => (
  <header>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>

    {loggedIn &&
      <ul>
        <li><Link to="/">Today</Link></li>
        <li><Link to="/forecast">Forecast</Link></li>
        <li><Link to="preferences">Preferences</Link></li>
        <li onClick={handleSession}>Log out</li>
      </ul>
    }

    <hr />
  </header>
);

export default Header;

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleSession: PropTypes.func.isRequired,
};

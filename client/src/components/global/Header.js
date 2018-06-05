/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../logo.svg';

const Header = ({ handleSession, loggedIn }) => (
  <HeaderContainer>
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoContainer>

    {loggedIn &&
      <Nav>
        <ul>
          <li><Link to="/">Today</Link></li>
          <li><Link to="/forecast">Forecast</Link></li>
          <li><Link to="/preferences">Preferences</Link></li>
          <li onClick={handleSession}>Log out</li>
        </ul>
      </Nav>
    }

  </HeaderContainer>
);

export default Header;

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleSession: PropTypes.func.isRequired,
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 200px;
  padding: 20px;
  background-color: #111;
  color: white;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  a img {
    width: 100%;
  }
`;

const Nav = styled.nav`
  position: absolute;
  bottom: 15px;
  ul {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0;
    padding: 0;
    list-style: none;

    a, li {
      text-decoration: none;
      font-weight: bold;
      color: #fff;

      &:hover, {
        color: #6c5ce7;
        cursor: pointer;
      }
    }
  }
`;

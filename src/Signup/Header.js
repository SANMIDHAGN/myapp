import React from 'react';
import './Header.css';
import logo from '../images/netflix-logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" />
    </header>
  );
};

export default Header;

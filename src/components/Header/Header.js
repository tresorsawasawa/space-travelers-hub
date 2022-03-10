import React from 'react';
import logo from '../../images/logo.png';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <div className="logo flex-center-center">
      <img src={logo} className="app-logo" alt="logo" />
      <h2 className="title">Space Travelers&apos; Hub</h2>
    </div>
    <Navbar />
  </header>
);
export default Header;

import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';
const Header = () => (
  <header className="header">
    <div className="logo flex-center-center">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <Navbar />
  </header>
);
export default Header;
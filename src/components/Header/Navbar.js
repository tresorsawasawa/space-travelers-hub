import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/MyProfile',
      text: 'My Profile',
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container flex-center-center">
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`, 'nav-links flex-center-center'}>
        <button
          type="button"
          onClick={handleToggle}
          className="clickable"
        >
          {navbarOpen ? 'Close' : 'Open'}
        </button>
        {links.map((link) => (
          <li key={link.id} className="nav-item">
            <NavLink
              to={link.path}
              className={(navData) => (navData.isActive ? 'active-link' : 'none')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

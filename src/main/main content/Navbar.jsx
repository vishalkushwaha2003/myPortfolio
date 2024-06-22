import React from 'react';

function Navbar({ setActiveComponent }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link button-animation" onClick={() => setActiveComponent('About')}>About</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link button-animation" onClick={() => setActiveComponent('Resume')}>Resume</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link button-animation" onClick={() => setActiveComponent('Portfolio')}>Portfolio</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link button-animation" onClick={() => setActiveComponent('Blog')}>Blog</button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link button-animation" onClick={() => setActiveComponent('Contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

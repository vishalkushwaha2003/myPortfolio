import React, { useState } from 'react';

function Navbar({ setActiveComponent }) {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  return (
    <nav className="flex justify-center space-x-5 items-center">
      <button
        className={`buttonNav ${activeButton === 'About' ? 'active' : ''}`}
        onClick={() => handleButtonClick('About')}
      >
        About
      </button>
      <button
        className={`buttonNav ${activeButton === 'Resume' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Resume')}
      >
        Resume
      </button>
      <button
        className={`buttonNav ${activeButton === 'Portfolio' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Portfolio')}
      >
        Portfolio
      </button>
      <button
        className={`buttonNav ${activeButton === 'Blog' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Blog')}
      >
        Blog
      </button>
      <button
        className={`buttonNav ${activeButton === 'Contact' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Contact')}
      >
        Contact
      </button>
    </nav>
  );
}

export default Navbar;

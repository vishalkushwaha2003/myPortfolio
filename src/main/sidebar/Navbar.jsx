import React, { useState } from 'react';

function Navbar({ setActiveComponent }) {
  const [activeButton, setActiveButton] = useState('About');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setActiveButton(component);
  };

  return (
    <div className=" h-[60%] w-auto flex justify-center gap-5 items-center  overflow-x-scroll">
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
        className={`buttonNav ${activeButton === 'Skills' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Skills')}
      >
        Skill sets
      </button>
      <button
        className={`buttonNav ${activeButton === 'Contact' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Contact')}
      >
        Contact
      </button>
    </div>
  );
}

export default Navbar;

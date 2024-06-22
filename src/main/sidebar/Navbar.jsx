import React from 'react';
import Button from './Button';

function Navbar({ setActiveComponent }) {
  return (
    <nav className="flex justify-center space-x-5 pt-3 items-center border-spacing-1">
      
     
        
          <button className="buttonNav" onClick={() => setActiveComponent('About')}>About</button>
       
        
          <button className="buttonNav" onClick={() => setActiveComponent('Resume')}>Resume</button>
       
        
          <button className="buttonNav" onClick={() => setActiveComponent('Portfolio')}>Portfolio</button>
        
        
          <button className="buttonNav" onClick={() => setActiveComponent('Blog')}>Blog</button>
        
        
          <button className="buttonNav" onClick={() => setActiveComponent('Contact')}>Contact</button>
        
      
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

function MainContent() {
  const [activeComponent, setActiveComponent] = useState('About');
     console.log(activeComponent)
  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className='main-content'>
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
    
  );
}

export default MainContent;

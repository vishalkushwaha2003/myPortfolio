import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import PhotoSection from '../sidebar/PhotoSection';
import Sidebar from '../sidebar/Sidebar';

function MainContent() {
  // const [activeComponent, setActiveComponent] = useState('About');
  // console.log(activeComponent)
  // const renderComponent = () => {
  //   switch (activeComponent) {
  //     case 'About':
  //       return <About />;
  //     case 'Resume':
  //       return <Resume />;
  //     case 'Portfolio':
  //       return <Portfolio />;
  //     case 'Blog':
  //       return <Blog />;
  //     case 'Contact':
  //       return <Contact />;
  //     default:
  //       return <About />;
  //   }
  // };

  return (
    <div className='w-full h-full flex space-x-5 rounded-[30px] bg-[#0e0c0c] shadow-[0px_0px_30px_20px_rgb(25,25,25)] p-5'>
      
      
      <PhotoSection />
      
      <Sidebar />
      {/* <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()} */}
    </div>
  );
}

export default MainContent;

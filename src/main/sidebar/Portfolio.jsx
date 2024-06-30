import React, { useState } from 'react';
import { Button } from '@mui/material';
import All from './All';
import WebDevelopment from './WebDevelopment';
import ChromeExtension from './ChromeExtension';

import GitHub from './GitHub';
import Leetcode from './Leetcode';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('All');

  const renderContent = () => {
    switch (activeSection) {
      case 'All':
        return <All/>;
      case 'Web Development':
        return <WebDevelopment/>;
      case 'Chrome Extension':
        return <ChromeExtension/>;
      case 'GitHub':
        return <GitHub/>;
      case 'Leetcode':
        return <Leetcode/>;
      default:
        return <All/>;
    }
  };

  return (
    <div className='h-full w-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-12 row-span-1 flex justify-start items-start px-5 '>
        <Button 
          variant='text' 
          size='small' 
          sx={{ 
            color: 'whitesmoke', 
            padding: '5px 15px' 
          }} 
          onClick={() => setActiveSection('All')}
        >
          All
        </Button>
        <Button 
          variant='text' 
          size='small' 
          sx={{ 
            color: 'whitesmoke', 
            padding: '5px 15px' 
          }} 
          onClick={() => setActiveSection('Web Development')}
        >
          Web Development
        </Button>
        <Button 
          variant='text' 
          size='small' 
          sx={{ 
            color: 'whitesmoke', 
            padding: '5px 15px' 
          }} 
          onClick={() => setActiveSection('Chrome Extension')}
        >
          Chrome Extension
        </Button>
        <Button 
          variant='text' 
          size='small' 
          sx={{ 
            color: 'whitesmoke', 
            padding: '5px 15px' 
          }} 
          onClick={() => setActiveSection('GitHub')}
        >
          GitHub
        </Button>
        <Button 
          variant='text' 
          size='small' 
          sx={{ 
            color: 'whitesmoke', 
            padding: '5px 15px' 
          }} 
          onClick={() => setActiveSection('Leetcode')}
        >
          Leetcode
        </Button>
      </div>
      <div className=' w-full h-full col-span-12 row-span-11 '>
        {renderContent()}
      </div>
    </div>
  );
}

export default Portfolio;

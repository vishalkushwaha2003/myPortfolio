// src/SplineViewer.js
import React from 'react';

const Character3d = () => {
  return (
    <div className='w-1/2 h-full m-auto'>
      <spline-viewer 
        hint 
        loading-anim-type="spinner-big-light" 
        url="https://prod.spline.design/Jp2fE2upCjWifr97/scene.splinecode"
        logo={false}
        height="100%"
        width="100%"
        
      >
        
      </spline-viewer>
    </div>
  );
};

export default Character3d;

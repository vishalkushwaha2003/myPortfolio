// src/SplineViewer.js
import React from 'react';
import Loader from './Loader';

const Character3d = () => {
  return (
    <div className='w-[60%]  h-full m-auto overflow-hidden flex justify-center items-start'>
      <spline-viewer 
        hint 
        url="https://prod.spline.design/Jp2fE2upCjWifr97/scene.splinecode"
        logo={false}
        height="100%"
        width="100%"
        
      >
        <div className=" w-full h-full flex  justify-center items-center  ">
          <Loader />
        </div>
      </spline-viewer>
    </div>
  );
};

export default Character3d;

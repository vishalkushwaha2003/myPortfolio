// SkillCard.jsx
import React from 'react';
import ProgressBar from './ProgressBar';



const SkillCard = ({ icon,name,experience,progress}) => {
  return (
    
      <div className='h-full  w-full grid grid-cols-1 grid-rows-10  p-1 overflow-hidden'>
        <div className='col-span-1 row-span-4 flex justify-center items-center  text-[rgba(251,185,182,1)]'>{icon}</div>
        <div className='col-span-1 row-span-2 flex justify-center items-start font-bold sm:text-lg text-sm text-[#eee4e4be] '>{name}</div>
        <div className=' col-span-1 row-span-2 flex justify-center items-center sm:text-md text-xs text-[#efeaea6b]'>{experience} experience </div>
        

        <div className='col-span-1 row-span-2 mt-1'><ProgressBar progress={progress}/></div>
      </div>
    
  );
};

export default SkillCard;

// SkillCard.jsx
import React from 'react';
import ProgressBar from './ProgressBar';
import { FaHtml5 } from "react-icons/fa";


const SkillCard = ({ skillName, progress }) => {
  return (
    
      <div className='h-full  w-full grid grid-cols-1 grid-rows-10  p-1'>
        <div className='col-span-1 row-span-4 flex justify-center items-center  text-[rgba(251,185,182,1)]'><FaHtml5 className='h-full w-full'/></div>
        <div className='col-span-1 row-span-2 flex justify-center items-center font-bold text-lg text-[#eee4e4be] '>HTML</div>
        <div className=' col-span-1 row-span-2 flex justify-center items-center text-md text-[#efeaea6b]'>2 year experience </div>
        

        <div className='col-span-1 row-span-2 '><ProgressBar/></div>
      </div>
    
  );
};

export default SkillCard;

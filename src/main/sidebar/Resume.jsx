import React from 'react'
import Timeliner from './Timeliner'
import BarChart from './BarChart'

function Resume() {
  return (
    <div className=" w-full h-[90%] p-5 grid grid-cols-2 grid-rows-12 gap-1">
   
      <div className="col-span-1 row-span-10  p-5 flex items-center justify-center "><Timeliner/></div>
      <div className="col-span-1 row-span-10 flex flex-col items-center p-5">
      <div className='text-[20px] font-medium text-white '>My Skill</div>
      <BarChart/>
        
      </div>
      <div className="col-span-2 row-span-2 bg-gray-600">Item 3</div>
    </div>
  
  )
}

export default Resume

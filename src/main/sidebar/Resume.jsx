import React from 'react'
import Timeliner from './Timeliner'

function Resume() {
  return (
    <div className=" w-full h-5/6 p-5 grid grid-cols-2 grid-rows-2 gap-1">
   
      <div className="col-span-1 row-span-1 bg-gray-400">Item 1</div>
      <div className="col-span-1 row-span-1 bg-gray-400">Item 2</div>
      <div className="col-span-2 row-span-1 bg-gray-600">Item 3</div>
    </div>
  
  )
}

export default Resume

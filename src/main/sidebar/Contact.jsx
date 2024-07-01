import React from 'react'
import Character3d from './Character3d'

function Contact() {
  return (
    <div className='w-full h-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-12 row-span-8 overflow-hidden '><Character3d/></div>
      <div className='col-span-12 row-span-4 grid grid-cols-4 grid-rows-2 '>
      <div className='col-span-2 row-span-1 bg-red-500'></div>
      <div className='col-span-2 row-span-1 bg-green-600'></div>
      <div className='col-span-3 row-span-1 bg-slate-50'></div>
      <div className='col-span-1 row-span-1 bg-orange-500'></div>
      </div>
      
    </div>
  )
}

export default Contact

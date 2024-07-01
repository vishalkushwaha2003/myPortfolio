import React from 'react'
import Character3d from './Character3d'

function Contact() {
  return (
    <div className='w-full h-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-6 row-span-1 bg-red-500'></div>
      <div className='col-span-6 row-span-1 bg-green-600'></div>
      <div className='col-span-12 row-span-11 bg-slate-500'><Character3d/></div>
    </div>
  )
}

export default Contact

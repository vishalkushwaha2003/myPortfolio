import React from 'react'
import Character3d from './Character3d'
import InputComponent from './Inputcomponent'

function Contact() {
  return (
    <div className='w-full h-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-12 row-span-8 overflow-hidden '><Character3d/></div>
      <div className='col-span-12 row-span-4 grid grid-cols-5 grid-rows-3 gap-1 '>
      <div className='col-span-2 row-span-1 w-full h-full  '><InputComponent myPlaceholder='Full Name' /></div>
      <div className='col-span-2 row-span-1 '><InputComponent myPlaceholder='Email Address'/></div>
      <div className='col-span-4 row-span-2 bg-slate-50'><input type="text" className='h-full w-full'/></div>
      <div className='col-span-1 row-span-2 bg-orange-500'></div>
      </div>
      
    </div>
  )
}

export default Contact

import React from 'react'
import Character3d from './Character3d'
import InputComponent from './Inputcomponent'
import MessageComponent from './MessageComponent'

function Contact() {
  return (
    <div className='w-full h-full grid grid-cols-12 grid-rows-2'>
      <div className='col-span-12 row-span-1 overflow-hidden '><Character3d/></div>
      <div className='col-span-12 row-span-1 grid sm:grid-cols-4 grid-cols-1 sm:grid-rows-3 grid-rows-4 sm:gap-1 gap-8 w-[80%] m-auto '>
      <div className='sm:col-span-2 col-span-1 sm:row-span-1 row-span-1 w-full h-full   '><InputComponent myPlaceholder='Full Name' /></div>
      <div className='sm:col-span-2 col-span-1 sm:row-span-1 row-span-1'><InputComponent myPlaceholder='Email Address'/></div>
      <div className='sm:col-span-4 col-span-1 sm:row-span-2 row-span-2 flex justify-center items-center'><MessageComponent/></div>
      
      </div>
      
    </div>
  )
}

export default Contact

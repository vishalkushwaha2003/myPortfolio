import React from 'react'
import Character3d from './Character3d'
import InputComponent from './Inputcomponent'
import MessageComponent from './MessageComponent'

function Contact() {
  return (
    <div className='w-full h-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-12 row-span-8 overflow-hidden '><Character3d/></div>
      <div className='col-span-12 row-span-4 grid grid-cols-4 grid-rows-3 gap-1 w-[80%] m-auto '>
      <div className='col-span-2 row-span-1 w-full h-full   '><InputComponent myPlaceholder='Full Name' /></div>
      <div className='col-span-2 row-span-1 '><InputComponent myPlaceholder='Email Address'/></div>
      <div className='col-span-4 row-span-2 flex justify-center items-center'><MessageComponent/></div>
      
      </div>
      
    </div>
  )
}

export default Contact

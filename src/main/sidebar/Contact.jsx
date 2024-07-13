import React from 'react'
import Character3d from './Character3d'

import ContactForm from './ContactForm'
import ContactEmail from './ContactEmail'
import ContactEmail1 from './ContactEmail1'


function Contact() {
  return (
    // <div className='w-full h-full grid grid-cols-12 grid-rows-2'>
    //   <div className='col-span-12 row-span-1 overflow-hidden '><Character3d/></div>
    //   <ContactForm/>
      
    // </div>
    // <ContactEmail/>
   <div className='w-full h-full  flex justify-center items-center'>
     <ContactEmail1/>
   </div>
  )
}

export default Contact

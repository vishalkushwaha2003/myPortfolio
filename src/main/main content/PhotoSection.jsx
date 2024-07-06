import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedinIn } from "react-icons/fa6";

function PhotoSection() {
  return (
    <div className="card ">
        <button className="mail text-[rgb(251,185,182)] hover:text-[#e16861] duration-100 hover:scale-125">
       
       <EmailOutlinedIcon fontSize='medium'/>
        </button>
        <div className="profile-pic">
            
            <svg version="1.1" id="svg2" width="666.66669" height="666.66669" viewBox="0 0 666.66669 666.66669" xmlns="http://www.w3.org/2000/svg">
                <defs id="defs6">
                    <clipPath clipPathUnits="userSpaceOnUse" id="clipPath408">
                        <path d="m 699.926,0 h 3600.16 V 4818.31 H 699.926 Z" id="path406"></path>
                    </clipPath>
                </defs>
                
              
            </svg>
        </div>
        <div className="bottom px-auto  ">
            <div className="content h-[50%] m-auto  flex flex-col justify-center items-center text-white/0 duration-[1s]">
                
                <div className="lg:text-[20px] md:text-[16px] lg:font-bold md:font-bold sm:font-medium">VISHAL KUSHWAHA</div>
                <div className="lg:text-[14px] md:text-[12px] lg:font-bold md:font-bold sm:font-medium">fronted developer</div>
               
            </div>
           <div className="bottom-bottom w-full  m-auto">
            <div className=" social-links-container  flex justify-evenly  w-full">
                 <InstagramIcon fontSize='large' className='hover:cursor-pointer'/>
                 <GitHubIcon fontSize='large'className='hover:cursor-pointer' />
                 <FaLinkedinIn className='lg:w-[20px] md:[17px] hover:cursor-pointer'/>
                 <WhatsAppIcon fontSize='large' className='hover:cursor-pointer'/>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default PhotoSection

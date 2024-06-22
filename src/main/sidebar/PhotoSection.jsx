import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedinIn } from "react-icons/fa6";

function PhotoSection() {
  return (
    <div className="card ">
        <button className="mail">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
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
        <div className="bottom">
            <div className="content">
                <span className="name">My Name</span>
                <span className="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
            </div>
           <div className="bottom-bottom">
            <div className="social-links-container flex justify-around w-full">
                 <InstagramIcon fontSize='large'/>
                 <GitHubIcon fontSize='large'/>
                 <FaLinkedinIn className='w-[20px]'/>
                 <WhatsAppIcon fontSize='large'/>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default PhotoSection

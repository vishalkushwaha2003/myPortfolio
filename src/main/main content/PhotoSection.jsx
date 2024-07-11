import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedinIn } from "react-icons/fa6";
import myphoto1 from '../../assets/images/myphoto1.png';
import myBg from '../../assets/images/myBg.jpg'

function PhotoSection() {


  const phoneNumber = '9219111208';
  const message = 'Hello! I would like to chat with you.'; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="card ">
        <button className="mail text-[rgb(251,185,182)] hover:text-[#e16861] duration-100 hover:scale-125">
       
       <EmailOutlinedIcon fontSize='medium'/>
        </button>
        <div className={`profile-pic flex justify-center items-center`} >
    <img src={myphoto1} alt="Profile" />
</div>

        <div className="bottom px-auto  ">
            <div className="content h-[50%] m-auto  flex flex-col justify-center items-center text-white/0 duration-[1s]">
                
                <div className="lg:text-[20px] md:text-[16px] lg:font-bold md:font-bold sm:font-medium">VISHAL KUSHWAHA</div>
                <div className="lg:text-[14px] md:text-[12px] lg:font-bold md:font-bold sm:font-medium">Frontend Developer</div>
               
            </div>
           <div className="bottom-bottom lg:bottom-2 xl:bottom-3 2xl:bottom-5 md-bottom-10 sm:bottom-5 bottom-3  w-full  m-auto">
            <div className=" social-links-container  flex justify-evenly  w-full">
                 <a href="https://www.instagram.com/invites/contact/?igsh=1t0u2fwybrafd&utm_content=iuyt0dn"><InstagramIcon fontSize='large' className='hover:cursor-pointer'/></a>
                 <a href="https://github.com/vishalkushwaha2003"><GitHubIcon fontSize='large'className='hover:cursor-pointer' /></a>
                 <a href="https://www.linkedin.com/in/vishal-kushwaha-947364249/"><FaLinkedinIn className='lg:w-[20px] md:[17px] hover:cursor-pointer'/></a>
                 <a href={whatsappUrl}><WhatsAppIcon fontSize='large' className='hover:cursor-pointer'/></a>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default PhotoSection

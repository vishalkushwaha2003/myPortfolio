import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaLinkedinIn } from "react-icons/fa6";
import myphoto1 from '../../assets/images/myphoto1.png';
import myBg from '../../assets/images/myBg.jpg'

function PhotoSection() {


  const phoneNumber = '+91 8052385186';
  const message = 'Hii 👋! vishal \n Please let me know a convenient time for you to have a conversation?'; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  const email = 'vishal2003kushwaha@gmail.com'; 
  const emailSubject = 'Introducing "your message...."'; 
  const emailBody = 'I hope this email finds you well. My name is [Your Name].\n  "type your message......"   \n  \nPlease let me know a convenient time for you to have a conversation. \n \n Best regards,\n [Your Name] \n [Your Contact Information] '; 
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="card ">
        <button className="mail text-[rgb(251,185,182)] hover:text-[#e16861] duration-100 hover:scale-125">
       
       <a href={emailUrl} target="_blank" rel="noopener noreferrer"> <EmailOutlinedIcon fontSize='medium'/></a>
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
                 <a href="https://www.instagram.com/vishal_jnv/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize='large' className='hover:cursor-pointer'/></a>
                 <a href="https://github.com/vishalkushwaha2003" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'className='hover:cursor-pointer' /></a>
                 <a href="https://www.linkedin.com/in/vishal-kushwaha-947364249/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='lg:w-[20px] md:[17px] hover:cursor-pointer'/></a>
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" ><WhatsAppIcon fontSize='large' className='hover:cursor-pointer'/></a>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default PhotoSection

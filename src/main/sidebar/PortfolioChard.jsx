import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { FaLinkedinIn } from "react-icons/fa6";

function PortfolioChard({data}) {
  return (
    <div class="parent">
    <div class="card1">
       
        <div class="glass1"></div>
        <div class="content1">
            <span class="title">{data}</span>
        </div>
        <div class="bottom">
            
            <div class="social-buttons-container">
               <GitHubIcon fontSize={'medium'} className="social-button .social-button1 hover:cursor-pointer"/>
               <FaLinkedinIn  className="social-button .social-button2 hover:cursor-pointer h-6"/>
               <ExpandCircleDownIcon fontSize={'medium'} className="social-button .social-button3 hover:cursor-pointer"/>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default PortfolioChard

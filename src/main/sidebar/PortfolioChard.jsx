import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { FaLinkedinIn } from "react-icons/fa6";

function PortfolioChard({ data, handleOpen }) {
  return (
    <div className="parent">
      <div className="card1">
        <div className="glass1"></div>
        <div className="content1">
          <span className="title">{data}</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <GitHubIcon fontSize={'medium'} className="social-button social-button1 hover:cursor-pointer" />
            <FaLinkedinIn className="social-button social-button2 hover:cursor-pointer h-6" />
            <ExpandCircleDownIcon onClick={handleOpen} fontSize={'medium'} className="social-button social-button3 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioChard;

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { FaLinkedinIn } from "react-icons/fa6";

function PortfolioChard({ data, handleOpen,linkdin,GitHub }) {
  return (
    <div className="parent">
      <div className="card1">
        <div className="glass1"></div>
        <div className="content1">
          <span className="title">{data}</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <a href={GitHub} target='_blank' className="social-button social-button1 hover:cursor-pointer"><GitHubIcon fontSize={'medium'}  /></a>
            <a href={linkdin} target='_blank' className="social-button social-button2 hover:cursor-pointer "><FaLinkedinIn  fontSize={'large'} /></a>
            <ExpandMoreOutlinedIcon onClick={handleOpen} fontSize={'large'} className="social-button social-button3 hover:cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioChard;

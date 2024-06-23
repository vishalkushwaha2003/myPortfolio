import React from "react";
import aboutImage1 from '../../assets/images/icon-design.svg'
import aboutImage2 from '../../assets/images/icon-dev.svg'

import aboutImage3 from '../../assets/images/chrome.svg'

import aboutImage4 from '../../assets/images/icon-design.svg'

import aboutImage5 from '../../assets/images/icon-design.svg'


function AboutCard() {
  return (
    <div className="container">
      <div data-text="Web Designer" style={{ "--r": "-15" }} className="glass hover:cursor-pointer hover:border-[1px] hover:border-[#fbb9b6]">
        
        <img src={aboutImage1} alt="" />
        <span>Focusing on creating intuitive, responsive, and visually appealing website</span>
      </div>

      <div data-text="Wed Developer" style={{ "--r": "-15" }} className="glass hover:cursor-pointer hover:border-[1px] hover:border-[#fbb9b6]">
      <img src={aboutImage2} alt="" />
        <span>Top-tier, expertly crafted website development.</span>
      </div>
      <div data-text="Chrom Ext. dev." style={{ "--r": "5" }} className="glass hover:cursor-pointer hover:border-[1px] hover:border-[#fbb9b6]">
      <img src={aboutImage1} alt="" />
        <span>Creating custom tools to enhance browser functionality and user experience.</span>
      </div>
      <div data-text="DSA Enthusiast" style={{ "--r": "25" }} className="glass hover:cursor-pointer hover:border-[1px] hover:border-[#fbb9b6]">
      <img src={aboutImage1} alt="" />
        <span>Dedicated to solving complex problems and optimizing solutions.</span>
      </div>

      <div data-text="AWS" style={{ "--r": "25" }} className="glass hover:cursor-pointer hover:border-[1px] hover:border-[#fbb9b6]">
        <img src={aboutImage1} alt="" />
        <span>Proficient in AWS EC2 deployment, managing scalable and secure cloud applications.</span>
      </div>
    </div>
  );
}

export default AboutCard;

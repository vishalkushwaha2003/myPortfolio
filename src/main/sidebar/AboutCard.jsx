import React from "react";
import aboutImage1 from '../../assets/images/icon-design.svg'
import aboutImage2 from '../../assets/images/icon-dev.svg'

import aboutImage3 from '../../assets/images/icon-design.svg'

import aboutImage4 from '../../assets/images/icon-design.svg'

import aboutImage5 from '../../assets/images/icon-design.svg'


function AboutCard() {
  return (
    <div className="container">
      <div data-text="Github" style={{ "--r": "-15" }} className="glass hover:cursor-pointer">
        
        <img src={aboutImage1} alt="" />
        <span>follow</span>
      </div>

      <div data-text="Github" style={{ "--r": "-15" }} className="glass hover:cursor-pointer">
      <img src={aboutImage2} alt="" />
        <span>follow</span>
      </div>
      <div data-text="Code" style={{ "--r": "5" }} className="glass hover:cursor-pointer">
      <img src={aboutImage1} alt="" />
        <span>follow</span>
      </div>
      <div data-text="Earn" style={{ "--r": "25" }} className="glass hover:cursor-pointer">
      <img src={aboutImage1} alt="" />
        <span>follow</span>
      </div>

      <div data-text="Earn" style={{ "--r": "25" }} className="glass hover:cursor-pointer">
        <img src={aboutImage1} alt="" />
        <span>follow</span>
      </div>
    </div>
  );
}

export default AboutCard;

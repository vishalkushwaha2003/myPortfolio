import React from 'react'
import SkillCard from './SkillCard'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaNode } from "react-icons/fa";
import { RiBlenderLine } from "react-icons/ri";

function Blog() {
  return (
    <div className='w-full h-full p-5'>

<div className='w-full h-full grid grid-cols-3  grid-rows-3 gap-3 '>
       <div className='col-span-1 row-span-1 border-[0.5px] border-slate-600/50 rounded-lg hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInTopLeft animate__faster'><SkillCard icon={<FaHtml5 className='h-[80%] w-[80%]'/>} name={'HTML'} experience={"2 years"} progress={80}/></div>
       <div className='col-span-1 row-span-1  rounded-lg  border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInDown animate__faster'><SkillCard icon={<IoLogoCss3 className='h-[80%] w-[80%]'/>} name={'CSS'} experience={"2 years"} progress={60}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInTopRight animate__faster'><SkillCard icon={<IoLogoJavascript className='h-[80%] w-[80%]'/>} name={'JavaScript'} experience={"1 year"} progress={55}/></div> 
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInLeft animate__faster '><SkillCard icon={<FaReact className='h-[80%] w-[80%]'/>} name={'REACT'} experience={"1 year"} progress={70}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__zoomIn animate__faster'><SkillCard icon={<SiMui className='h-[80%] w-[80%]'/>} name={'Material UI'} experience={"6 months"} progress={40}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInRight animate__faster'><SkillCard icon={<RiTailwindCssFill className='h-[80%] w-[80%]'/>} name={'Tailwind CSS'} experience={"7 months"} progress={80}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInBottomLeft animate__faster'><SkillCard icon={<FiGithub className='h-[80%] w-[80%]'/>} name={'GitHub'} experience={"8 months"} progress={40}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInUp animate__faster'><SkillCard icon={<FaNode className='h-[80%] w-[80%]'/>} name={'Node.js'} experience={"6 months"} progress={50}/></div>
       <div className='col-span-1 row-span-1  rounded-lg border-[0.5px] border-slate-600/50 hover:shadow-[0px_0px_10px_1px_rgba(241,176,176,0.15)] duration-200 animate__animated animate__fadeInBottomRight animate__faster'><SkillCard icon={<RiBlenderLine className='h-[80%] w-[80%]'/>} name={'Blender'} experience={"3 months"} progress={40}/></div>
    </div>
    </div>
  )
}

export default Blog

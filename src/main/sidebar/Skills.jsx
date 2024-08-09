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
import { TbBrandTypescript } from "react-icons/tb";

function Blog() {
  return (


<div className='w-full p-6 grid sm:grid-cols-3 grid-cols-2  sm:grid-rows-4 grid-rows-6 gap-3 overflow-y-scroll'>
      <SkillCard icon={<FaHtml5 className='h-[80%] w-[80%]'/>} name={'HTML'} experience={"2 years"} progress={80}/>
      <SkillCard icon={<IoLogoCss3 className='h-[80%] w-[80%]'/>} name={'CSS'} experience={"2 years"} progress={60}/>
       <SkillCard icon={<IoLogoJavascript className='h-[80%] w-[80%]'/>} name={'JavaScript'} experience={"1 year"} progress={55}/>
    <SkillCard icon={<TbBrandTypescript className='h-[80%] w-[80%]'/>} name={'TypeScript'} experience={"2 months"} progress={40}/>
       
       <SkillCard icon={<FaReact className='h-[80%] w-[80%]'/>} name={'REACT'} experience={"1 year"} progress={70}/>
      <SkillCard icon={<SiMui className='h-[80%] w-[80%]'/>} name={'Material UI'} experience={"6 months"} progress={40}/>
    <SkillCard icon={<RiTailwindCssFill className='h-[80%] w-[80%]'/>} name={'Tailwind CSS'} experience={"7 months"} progress={80}/>
     <SkillCard icon={<FiGithub className='h-[80%] w-[80%]'/>} name={'GitHub'} experience={"8 months"} progress={40}/>
      <SkillCard icon={<FaNode className='h-[80%] w-[80%]'/>} name={'Node.js'} experience={"6 months"} progress={50}/>
      <SkillCard icon={<RiBlenderLine className='h-[80%] w-[80%]'/>} name={'Blender'} experience={"3 months"} progress={40}/>

    </div>
   
  )
}

export default Blog

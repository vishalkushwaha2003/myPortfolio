import React from 'react'
import Divider from '@mui/material/Divider';


function About() {
  return (
    <div className=' p-10 flex flex-col space-y-5'>
      <div className='flex flex-col space-y-2'>
      <div className='text-[30px] font-bold text-[rgba(255,255,255,0.8)] '>About me</div>
        <div className='text-[20px] text-[rgba(255,255,255,0.6)]'> 
          Hello! I'm Vishal Kushwaha, currently pursuing a B.Tech in Information Technology from Harcourt Butler Technical University (HBTU), Kanpur. I have a deep passion for transforming complex problems into simple, beautiful, and intuitive designs. My goal is to craft websites that are not only functional and user-friendly but also visually appealing.
          </div> 
      </div>
          <Divider sx={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            width: '50%',
          }}/>
          <div className='text-[30px] font-bold text-[rgba(255,255,255,0.8)] '>
            What I'm Doing
            </div>     
    </div>
  )
}

export default About

import { Button } from '@mui/material'
import React from 'react'

function Portfolio() {
  return (
    <div className=' h-full w-full grid grid-cols-12 grid-rows-12'>
      <div className='col-span-12 row-span-1  flex justify-start items-start px-5 space-x-3'>

        <Button variant='text' size='small' sx={{
          
          color:'whitesmoke'
        }}>All</Button>
        <Button variant='text'size='small' sx={{
          
          color:'whitesmoke'
        }}>web Development
        </Button>
        <Button variant='text' size='small' sx={{
          
          color:'whitesmoke'
        }}>Chrome Extension</Button>
      </div>
      <div className='col-span-12 row-span-11 bg-slate-800'></div>
      
    </div>
  )
}

export default Portfolio

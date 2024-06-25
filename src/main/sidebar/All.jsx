import React from 'react'
import PortfolioChard from './PortfolioChard'

function All() {

  const data = ['chat App','Activity Tracker','FunQrew','Runner']
    
  return (
    <div className='w-full h-full p-5 justify-evenly flex items-center'>
      <PortfolioChard data={data[0]}/>
      <PortfolioChard data={data[1]}/>
      <PortfolioChard data={data[2]}/>
      <PortfolioChard data={data[3]}/>
    </div>
  )
}

export default All

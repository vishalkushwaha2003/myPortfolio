import React from 'react'
import PortfolioChard from './PortfolioChard'

function All() {
  return (
    <div className='w-full h-full p-5 space-x-3 flex justify-center items-center'>
      <PortfolioChard/>
      <PortfolioChard/>
      <PortfolioChard/>
      <PortfolioChard/>
    </div>
  )
}

export default All

import React from 'react'
import CompareCard from './CompareCard';

const Compare = ({}) => {
  return (
    <div className='wrapper-container h-full w-full text-white py-10 flex items-center justify-between space-x-3'>
      <CompareCard/>
      <CompareCard/>
      <CompareCard/>
    </div>
  )
}

export default Compare
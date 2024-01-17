import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-auto text-white'>
    <a href={``} className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[350px] rounded-xl h-[200px] p-1" src="src/assets/hero_image.jpeg" alt=""/>
        <div className="p-4 flex flex-row">
         <div>
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-white">Hotel Meridian</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-400">Hotel</p>

            <p className='mb-2 text-gray-400 flex'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                </span>
                <span className='text-primary-500'>Mumbai</span></p>
            <p className='mb-2 text-gray-400'><span className='text-primary-500'>9.6 - Excellent</span> (85 Reviews)</p>
            </div>
            </div>
        </div>
        
    </a>
    </div>
  )
}

export default Card
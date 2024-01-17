import React from 'react'

const Card = ({cardData, onCheckboxChange, index}) => {

  return (
    <div className='w-full h-auto text-white'>
    <a href={`/service/1`} className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[350px] rounded-xl h-[200px] p-1" src="src/assets/hero_image.jpeg" alt=""/>
        <div className="p-4 flex flex-row w-full justify-between">
         <div className=''>
           <div className='flex items-start'>
            <h5 className="mb-3 text-3xl flex font-bold text-white">Hotel Meridian
            <span className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 text-primary-500">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            </span>
            </h5>
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

          <div className='flex flex-col'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>

          <input type="checkbox" name="" id="" onChange={() => onCheckboxChange(index)} className='h-7 mt-10'/>
          </div>
        </div>

    </a>
    </div>
  )
}

export default Card
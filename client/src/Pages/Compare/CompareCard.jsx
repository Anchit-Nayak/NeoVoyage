import React from 'react'

const CompareCard = () => {
  return (
    <div className='bg-gray-800 border border-gray-500 rounded-2xl pb-2 w-full flex flex-col h-1/2'>
        <img src="src/assets/hero_image.jpeg" alt=""  className=' rounded-t-2xl'/>
        <div className='p-4'>
            <h1 className='text-xl font-bold'>Hotel Meridian</h1>
            <h1 className='text-primary-500 mt-2'>Hotel</h1>
            <h1 className='flex mt-2'>
                <span className='mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                </span>
                Mumbai</h1>

            <h1 className='mt-2 text-wrap'>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab voluptatem perferendis accusantium consequuntur ut placeat cum facilis cumque. Unde sint ipsa provident, impedit amet alias ratione atque iusto! Aut.</h1>
            <h1 className='mt-2 text-md'>Reviews: 20</h1>
        <h1 className='mt-2'>Ratings:</h1>
          <ul>
            <li className=''>Overall: <span className='text-primary-500'>9.8 - Excellent</span></li>
            <li className=''>Safety: <span className='text-primary-500'>9.8</span></li>
            <li className=''>Reliability: <span className='text-primary-500'>9.8</span></li>
            <li className=''>Cost Effectiveness: <span className='text-primary-500'>9.8</span></li>
          </ul>
          <a href="/service/1" className='w-full'>
          <button className='py-2 px-7 bg-primary-600 hover:bg-primary-500 text-md rounded-xl w-full mt-3'>Know More</button>
          </a>
        </div>
    </div>
  )
}

export default CompareCard
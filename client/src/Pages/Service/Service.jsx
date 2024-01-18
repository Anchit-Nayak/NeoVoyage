import React from 'react'
import Comments from './Comments'
import GetGeoLocation from '../GeoLocation/GetGeoLocation'

const Service = () => {
  return (
    <div className='w-full h-96 relative bg-gradient-to-b from-gray-500 to-gray-900'>
    <img src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg" alt=""  className='w-full h-full object-cover absolute mix-blend-overlay'/>
    <div className='wrapper-container content-start p-4 py-48 h-screen'>
       <div className='mb-6'>
        <h1 className='text-slate-100 font-lato font-bold text-3xl md:text-5xl mb-2'>Hotel Meridian</h1>
        <h1><span className='text-slate-100 text-xl'>Hotel</span></h1>
        </div>
        <div className='bg-gray-800 h-auto w-full rounded-lg text-gray-100 p-8 backdrop-brightness-200'>
        <div className='flex flex-row'>
        <div className='text-gray-400 text-xl'>
  
          <h1><span className='font-bold'>Location: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas recusandae ullam aperiam repellendus non.</h1>
          <br />
          <h1><span className='font-bold'>Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae consectetur culpa vero fuga, repellendus, cumque ea corporis nulla minima dolores velit esse. Neque quis cumque, eos deserunt quaerat ullam!</h1>
          <br />
          <GetGeoLocation/>
          <br />
          Ratings:
          <ul>
            <li className='text-xl font-bold'>Safety: <span className='text-primary-500'>9.8</span></li>
            <li className='text-xl font-bold'>Reliability: <span className='text-primary-500'>9.8</span></li>
            <li className='text-xl font-bold'>Cost Effectiveness: <span className='text-primary-500'>9.8</span></li>
          </ul>
        </div>
        </div>
        
    </div>
    <Comments/>
    </div>
</div>
  )
}

{/* <div className='w-full h-96 relative bg-gradient-to-b from-gray-500 to-gray-900'>
<img src="src/assets/terraform.jpg" alt=""  className='w-full h-full object-cover absolute mix-blend-overlay'/>
<div className='wrapper-container p-4 py-48 h-screen'>
    <h1 className='text-slate-200 font-lato font-bold text-3xl md:text-5xl mb-10'>Terraform for beginners</h1>
    <div className='flex flex-col'>
    <PostContainer/>
    <div className='flex items-start flex-col md:flex-row'>
    <Comments/>
    <div className='w-full md:w-1/3 flex flex-col md:flex-col py-8 lg:py-16 ml-5'>
    <div className='flex'>
    <Events/>
    </div>
    <div className='w-full pb-3'>
    <Contact/>
    </div>
    </div>
    </div>
    </div>
</div>
</div> */}

export default Service
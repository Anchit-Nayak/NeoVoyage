import React from 'react'

const Explore = () => {
  return (
    <div className="wrapper-container py-40 text-white" id="service">
        <div className='mx-auto grid md:grid-cols-2'>
        <img className='w-auto h-auto rounded-3xl'src='src/assets/IndianFood.jpg' alt=""/>
        <div className='pl-7 pt-4'>
            <p className='mb-3 font-bold text-2xl'>Explore Places Near You</p>
            <p className='text-justify'>Uncover a world of local delights through Neovoyage: your community-powered guide to exquisite dining, seamless transportation, cozy accommodations, and captivating attractions. Your adventure begins now!</p>
            <a href="/explore" >
            <button  className='bg-primary-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-primary-700'>Explore</button>     
            </a>
        </div>
        </div>
    </div>
  )
}

export default Explore
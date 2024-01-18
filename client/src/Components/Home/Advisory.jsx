import React from 'react'

const Advisory = () => {
  return (
    <div className="wrapper-container py-40 text-white" id="#service">
        <div className='mx-auto grid md:grid-cols-2'>
        <div className='pr-7 pt-4'>
            <p className='mb-3 font-bold text-2xl'>Explore Advisory</p>
            <p className='text-wrap'>Discover nearby restaurants offering delightful cuisines, seamless transportation options for easy mobility, cozy accommodations for a restful stay, and captivating attractions to explore. Neovoyage, a community-driven platform, is your personalized guide to the local treasures—start your adventure now!</p>
            <a href="" >
            <button  className='bg-primary-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-primary-700'>Explore</button>     
            </a>
        </div>
        <img className='w-auto h-auto rounded-3xl'src='src/assets/IndianFood.jpg' alt=""/>
        
        </div>
    </div>
  )
}

export default Advisory
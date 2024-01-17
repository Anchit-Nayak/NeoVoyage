import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen relative py-[2px] bg-gradient-to-l from-gray-500 to-gray-900 text-white'>
        <img src="src/assets/hero_image.jpeg" alt=""  className='w-full h-screen object-cover absolute mix-blend-overlay'/>
        <div className='wrapper-container mt-[-96px] w-full h-screen mx-auto text-start flex flex-col justify-center'>
            <p className='text-slate-100 font-bold text-xl py-2'>Transforming Travels and Beyond,</p>
            <h1 className='md:text-7xl text-5xl font-extrabold md:py-6'>NeoVoyage.</h1>
            <div>
            </div>
            <p className='text-gray-200 py-2'>Pioneering Your Path to Modern Exploration and Unforgettable Adventures.</p>
            <a href="#invest" className='w-[200px]'>
            <button  className='bg-slate-950 hover:bg-slate-200 shadow-4xl w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>     
            </a>
        </div>
    </div>
  )
}

export default Hero
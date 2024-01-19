import React from 'react'

const Advisory = () => {
  return (
    <div className="wrapper-container py-40 text-white" id="#service">
        <div className='mx-auto grid md:grid-cols-2'>
        <div className='pr-7 pt-4 text-end'>
            <p className='mb-3 font-bold text-2xl'>Travel Advisories & Emergency Contacts</p>
            <p className='text-justify'>Explore crucial travel information and ensure your safety with our Travel Advisories and Emergency Contacts page. Discover real-time alerts, important advisories, and find emergency contact numbers at your fingertips.</p>
            <a href="/advisory" >
            <button  className='bg-primary-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-primary-700'>Explore</button>     
            </a>
        </div>
        <img className='w-auto h-[300px] rounded-3xl' src='https://i.pinimg.com/564x/44/cd/3f/44cd3f63909ce8824c3fa715a6affa19.jpg' alt=""/>
        
        </div>
    </div>
  )
}

export default Advisory
import React from 'react'
import Form from './Form';

const Contactform = () => {
  return (
    <div className="wrapper-container text-white py-20" id="contact">
        <div className='max-w-[1240px] mx-auto mb-10 text-center'>
            <h1 className='font-bold text-4xl'>How Can We Help You?</h1>
        </div>
        <div className='mx-auto flex justify-center items-center py-20'>
            <div className='w-2/3 mr-0'>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contactform
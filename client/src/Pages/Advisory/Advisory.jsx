import React from 'react'
import EmergencyContacts from './EmergencyContacts'
import Temperatue from './Temperatue'

const Advisory = () => {
  return (
    <div className='wrapper-container flex flex-row py-12 text-gray-200 space-x-3'>
        <div className='w-2/3 p-4 rounded-xl bg-gray-700 flex flex-col space-y-4 text-gray-200 text-xl border border-gray-500'>
        <h1 className='font-bold text-3xl'>Around You</h1>
        </div>
        <div className='w-1/3'>
        <EmergencyContacts/>
        </div>
    </div>
  )
}

export default Advisory
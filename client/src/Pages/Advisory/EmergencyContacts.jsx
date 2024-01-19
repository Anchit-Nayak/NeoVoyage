import React from 'react'

const EmergencyContacts = () => {
  return (
    <div className='bg-gray-700 flex flex-col p-4 space-y-4 text-gray-200 text-xl rounded-xl border border-gray-500'>
        <h1 className='font-bold text-3xl'>Emergency Contacts</h1>
        <a href="tel:102" className='hover:text-primary-500'>Ambulance</a>
        <a href="tel:101" className='hover:text-primary-500'>Fire</a>
        <a href="tel:100" className='hover:text-primary-500'>Police</a>
    </div>
  )
}

export default EmergencyContacts
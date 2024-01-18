import React, { useState , useEffect} from 'react'
import { getServiceDetails } from '../../api';

const CompareCard = ({id}) => {
  const [service , setService] = useState(null);

  const options = {
    "attraction":"Tourist Attractions",
    "restaurant":"Restaurants",
    "accommodation":"Accomodation",
    "transportation":"Transportation"
  };
  const [ratingName , setRatingName] = useState('');;
  useEffect(() => {
    (async function serviceDetails(){
      const response = await getServiceDetails(id)
      console.log(response)
      setService(response)
      if(response?.rating <= 3) setRatingName('Inadequate');
      else if(response?.rating <= 6) setRatingName('Satisfactory');
      else if(response?.rating <= 8) setRatingName('Good');
      else setRatingName('Excellent');
    })()
  },[id])

  return (
    <div className='bg-gray-800 border border-gray-500 rounded-2xl pb-2 w-full flex items-stretch justify-evenly flex-1 flex-col h-1/2'>
        <img src={service?.image} alt=""  className=' rounded-t-2xl h-[300px] object-cover'/>
        <div className='p-4'>
            <h1 className='text-xl font-bold'>{service?.name}</h1>
            <h1 className='text-primary-500 mt-2'>{options[service?.type]}</h1>
            <h1 className='flex mt-2'>
                <span className='mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                </span>
                {service?.location}</h1>

            <h1 className='mt-2 text-wrap'><span className='text-gray-400'>Description: </span>{service?.description}</h1>
            <h1 className='mt-2'>Reviews: {service?.reviewCount}</h1>
        <h1 className='mt-2'>Ratings:</h1>
          <ul>
            <li className=''>Overall: <span className='text-primary-500'>{service?.rating} - {ratingName}</span></li> 
            <li className=''>Safety: <span className='text-primary-500'>{service?.safetyRating}</span></li>
            <li className=''>Reliability: <span className='text-primary-500'>{service?.honestyRating}</span></li>
            <li className=''>Cost Effectiveness: <span className='text-primary-500'>{service?.priceRating}</span></li>
          </ul>
          <a href={`/service/${id}`} className='w-full'>
          <button className='py-2 px-7 bg-primary-600 hover:bg-primary-500 text-md rounded-xl w-full mt-3'>Know More</button>
          </a>
        </div>
    </div>
  )
}

export default CompareCard
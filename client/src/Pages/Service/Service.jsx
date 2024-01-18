import React,{useEffect,useState} from 'react'
import Comments from './Comments'
import GetGeoLocation from '../GeoLocation/GetGeoLocation'
import { useParams } from 'react-router-dom';
import { getServiceDetails } from '../../api';

const Service = () => {
  const {id} = useParams();
  const [service,setService] = useState(null)
  const options = {
    "attraction":"Tourist Attractions",
    "restaurant":"Restaurants",
    "accommodation":"Accomodation",
    "transportation":"Transportation"
  };

  useEffect(() => {
    (async function serviceDetails(){
      const response = await getServiceDetails(id)
      console.log(response)
      setService(response)
    })()
  },[id])

  return (
    <div className='w-full h-96 relative bg-gradient-to-b from-gray-500 to-gray-900'>
    <img src={service?.image} alt=""  className='w-full h-full object-cover absolute mix-blend-overlay'/>
    <div className='wrapper-container content-start p-4 py-48 h-screen'>
       <div className='mb-6'>
        <h1 className='text-slate-100 font-lato font-bold text-3xl md:text-5xl mb-2'>{service?.name}</h1>
        <h1><span className='text-slate-100 text-xl'>{options[service?.type]}</span></h1>
        </div>
        <div className='bg-gray-800 h-auto w-full rounded-lg text-gray-100 p-8 backdrop-brightness-200'>
        <div className='flex flex-row'>
        <div className='text-gray-400 text-xl'>
  
          <h1><span className='font-bold'>Location: </span>{service?.location}</h1>
          <br />
          <h1><span className='font-bold'>Description: </span>{service?.description}</h1>
          <br />
          <GetGeoLocation/>
          <br />
          Ratings
          <ul>
            <li className='text-xl font-bold'>Safety: <span className='text-primary-500'>{service?.safetyRating}</span></li>
            <li className='text-xl font-bold'>Reliability: <span className='text-primary-500'>{service?.honestyRating}</span></li>
            <li className='text-xl font-bold'>Cost Effectiveness: <span className='text-primary-500'>{service?.priceRating}</span></li>
          </ul>
        </div>
        </div>
        
    </div>
    <Comments service={id} reviews={service?.reviews}/>
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
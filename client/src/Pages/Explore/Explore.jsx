import React, { useEffect, useState } from 'react'
import Card from './Card'
import CategoryFilter from '../../Components/Explore/CategoryFilter'
import RatingFilter from '../../Components/Explore/RatingFilter';
import LocationFilter from '../../Components/Explore/LocationFilter';
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getServices } from '../../api';


const Explore = () => {
  const [category,setCategory] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('none')
  const [location, setLocation] = useState('All Categories')
  const [services, setServices] = useState([])

  useEffect(()=>{
    (async function(){
      const response = await getServices({serviceType: category, sortByRate: ratingFilter, location})
      setServices(response)
    })()

  },[category,ratingFilter,location])
  const notify = () => {
    console.log("called");
    toast('');
  }

  const [selectedCards, setSelectedCards] = useState([]);

  const [buttonColor, setButtonColor] = useState('bg-gray-500 cursor-default')
  
  const [canCompare, setCompare] = useState(0);

  const handleCheckboxChange = (card) => {
      setSelectedCards((prevSelected) => {
        const isSelected = prevSelected.includes(card);
        if (isSelected) {
          return prevSelected.filter((selectedCard) => selectedCard != card);
        } else {
          return [...prevSelected, card];
        }
      });
  };

  useEffect(()=>{
    if(selectedCards.length>1 && selectedCards.length<=3) {
      setButtonColor('bg-primary-500 hover:bg-primary-400 cursor-pointer');
      setCompare(1);
    }
    else {
      setButtonColor('bg-gray-500 cursor-default');
      setCompare(0);
    }
    localStorage.setItem('myArray', JSON.stringify(selectedCards));
  }, [selectedCards.length])

  return (
    <div className='wrapper-container h-screen w-full py-3'>
      <form className=''>   
      <label for="default-search" class="mb-2 text-sm font-medium sr-only text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4  text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 border  rounded-lg hover:bg-gray-600 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search For Hotels, Transport, Restaurants...." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
      </div>
      </form>
      <div className='w-full space-y-4 py-10 h-full flex flex-row'>
         <div className='w-3/4'>
         {services.length == 0 ?
         <h1 className='text-4xl font-bold text-gray-300'>No Services Available</h1>  
         :services.map((service)=>{
          return <Card key={service._id} id={service._id} onCheckboxChange={handleCheckboxChange} service={service}/>
         })}
         </div>
         
         <div className='flex flex-col w-1/4 ml-3'>
        <CategoryFilter setCategory={setCategory}/>
         <RatingFilter setRatingFilter={setRatingFilter}/>
         <LocationFilter setLocation={setLocation}/>
        {
            services.length == 0 ?
         "" :
         <a href={`/compare`} className={`${canCompare ? ``: `pointer-events-none`} w-full`}>
         <button className={`w-full p-4 text-white ${buttonColor} px-7 py-3 rounded-xl`} onClick={()=>`${canCompare? "": notify}`}>
          Compare
         </button>
         </a>
         }
         </div>
         
         </div>
         <Toaster/>
      </div>
  )
}

export default Explore
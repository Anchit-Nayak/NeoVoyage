import React, { useState , useEffect} from 'react'
import CompareCard from './CompareCard';

const Compare = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    // Retrieve the array from localStorage
    const storedArray = localStorage.getItem('myArray');

    if (storedArray) {
      const parsedArray = JSON.parse(storedArray);
      setDataArray(parsedArray);
    }
  }, []);
  return (
    <div className='wrapper-container h-full w-full text-white py-10 flex flex-row justify-items-stretch items-stretch space-x-3'>
      {
        dataArray.map((id)=>{
          return <CompareCard key={id} id={id}/>
        })
      }
    </div>
  )
}

export default Compare
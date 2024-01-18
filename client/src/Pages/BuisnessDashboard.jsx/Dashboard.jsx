import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
      const id = localStorage.getItem("userId")
      const apiUrl = `http://localhost:3000/user/getRequests/${id}`; 
  
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            toast.error(response?.data?.message)
          }
          return response.json();
        })
        .then((data) => {
          setRequests(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    const signOut = () =>{
      localStorage.clear();
      location.reload();
    }
    return (
      <div className='wrapper-container py-16 mx-auto text-gray-50 h-full flex justify-center flex-col'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-extrabold'>Buisness Dashboard</h1>
          <a href="/signin" >
              <button onClick={signOut} className='bg-primary-500 shadow-4xl w-[120px]
              rounded-md font-medium mx-auto py-3 hover:bg-primary-700'>Sign Out</button>     
          </a>
          
        </div>
          <div className='w-full flex justify-center mt-20'>
              <div className='bg-gray-800 p-20 w-full h-[300px] rounded-xl flex justify-between items-center'>
                <h1>Hotel Meridian</h1>
              </div>
          </div>
      </div>
    )
}

export default Dashboard
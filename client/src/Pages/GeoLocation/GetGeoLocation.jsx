import React, { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast';
const GetGeoLocation = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    useEffect(() => {
        // Check if geolocation is supported by the browser
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // Successfully obtained the current position
             setLatitude(position.coords.latitude);
             setLongitude(position.coords.longitude);
            },
            (error) => {
              // Handle any errors that occurred while obtaining the position
              toast.error('Location access denied');
            }
          );
        } else {
          // Geolocation is not supported by the browser
          toast.error('Geolocation is not supported by your browser');
        }
    }, []);
  return (
    <div className='text-white'>
        Your Current location is {latitude},{longitude} 
        <Toaster/>
    </div>
  )
}

export default GetGeoLocation
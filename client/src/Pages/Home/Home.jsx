import React from 'react'
import Hero from '../../Components/Home/Hero'
import Explore from '../../Components/Home/Explore-home';
import Advisory from '../../Components/Home/Advisory';
import Contactform from '../../Components/Home/Contactform';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Explore/>
      <Advisory/>
      <Contactform/>
    </div>
  )
}

export default Home
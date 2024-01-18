import {Routes, Route} from 'react-router-dom'
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Layout from './Layout';
import Explore from './Pages/Explore/Explore';
import Compare from './Pages/Compare/Compare';
import Service from './Pages/Service/Service';
import Advisory from './Pages/Advisory/Advisory';
import OtpVerification from './Pages/OtpVerification';
import BuisnessSignup from './Pages/Signup/BuisnessSignup';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/compare" element={<Compare/>} />
        <Route path="/service/:id" element={<Service/>} />
        <Route path='/advisory' element={<Advisory/>}/>
      </Route>
      <Route path="/servicesignup" element={<BuisnessSignup/>} />
      <Route path="verification" element={<OtpVerification/>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App

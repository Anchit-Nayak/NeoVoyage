import {Routes, Route, Navigate} from 'react-router-dom'
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
import Dashboard from './Pages/BuisnessDashboard.jsx/Dashboard';
import Form from './Pages/BuisnessDashboard.jsx/Form';

const isAuthenticated = () => {
  const accessToken = localStorage.getItem('userId');
  return !!accessToken; // Returns true if there is an access token, false otherwise
};
const TouristRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    const type = localStorage.getItem("role");
    if(type === "business"){
      return <Navigate to="/signin" />
    }
    return <Component />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }
};

const BusinessRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    const type = localStorage.getItem("role");
    if(type === "tourist"){
      return <Navigate to="/" />
    }
    return <Component />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }
};

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
<<<<<<< HEAD
        <Route path="/explore" element={<TouristRoute component={Explore}/>} />
=======
        {/* <Route path="/explore" element={<TouristRoute component={<Explore/>}/>} /> */}
        <Route path="/explore" element={<Explore/>}/>
>>>>>>> d3bcf52925db2d384398c7aa307651caa3ed189a
        <Route path="/compare" element={<Compare/>} />
        <Route path="/service/:id" element={<Service/>} />
        <Route path='/advisory' element={<Advisory/>}/>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path="/servicesignup" element={<BuisnessSignup/>} />
      <Route path="/verification" element={<OtpVerification/>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App

import {Routes, Route} from 'react-router-dom'
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Layout from './Layout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App

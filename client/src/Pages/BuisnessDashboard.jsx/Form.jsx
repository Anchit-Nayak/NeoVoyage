import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [values, setValues] = useState({
    businessName:"",
    businessType:"",
    description:"",
    location:"",
    city:"",
    pincode:"",
    imageUrl:""
  });

  const navigate = useNavigate()

  // const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   try{
  //     const response = await axios.post("", {
  //       ...values,
  //     });
  //   } catch (error){
  //   }
  // }

  const handleLogOut = () =>{
    localStorage.clear();
    navigate('/signin')
  }

  return (
    <div className='wrapper-container py-12 text-gray-200 items-center w-full'>

      <div className='flex justify-between mb-3'>
        <h1 className='font-bold text-4xl '>Business Form</h1>
        <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={handleLogOut}>Logout</button>
      </div>

    <div className='w-full'>
<form class="py-20 px-20 border border-gray-500 rounded-xl" onSubmit={(e)=>handleSubmit(e)}>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" id="floating_name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
      <label for="floating_name" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Business Name</label>
  </div>
  

  
<label for="countries" class="block mb-2 font-medium text-sm  text-gray-400">Select a Business Type</label>
<select id="countries" class=" border mb-4 text-sm rounded-xl block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}>
  <option selected className='rounded-xl'>Choose a Type</option>
  <option value="Restaurant" className='rounded-xl'>Restaurant</option>
  <option value="Accomodation" className='rounded-xl'>Accomodation</option>
  <option value="Transportation" className='rounded-xl'>Transportation</option>
</select>



  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_description" id="floating_description" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
      <label for="floating_description" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="location" id="floating_location" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
      <label for="floating_location" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_description" id="floating_description" class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
      <label for="floating_description" class="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
  </div>
  
  <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
</form>
</div>
</div>
  )
}

export default Form
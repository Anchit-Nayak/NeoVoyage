import React, {useState, useEffect} from 'react'
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BuisnessSignup = () => {
    const otpver = "Already Signed Up, Please Verify your Email."
    const [values, setValues] = useState({
        fullName:"",
        email:"",
        password:"",

    });
    const [isSubscribed, setIsSubscribed] = useState(false);
  const handleChange = (event) => {
    if (!event.target.checked) {
      toast.error("Terms and conditions not agreed");
    }
    setIsSubscribed(current => !current);
  };
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!isSubscribed){
          toast.error("Terms and conditions not agreed")
        }else{
          try{
            const response = await axios.post("", {
              ...values,
            }
            );
            const id = response.data.id;
            toast.success("Registration Successfull!")
            navigate("/verification", {state: {key : id}});
          }catch (error){
              toast.error(error.response.data.message);
              if(error.response.data.message == otpver){
                navigate("/signin");
              }
          }
        }
    }
  return (
    <section class="bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="/signup" class="flex items-center mb-6 text-3xl font-semibold text-white">
          <img class="w-8 h-8 mr-2" src='https://api.domatron.com/storage/icons/e1d3f5/jq.svg' alt="logo"/>
          NeoVoyage   
      </a>
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white flex flex-col">
                    Create an account <span>(As a Service Provider)</span>
                </h1>
                <form onSubmit={(e)=>handleSubmit(e)} class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="Name" class="block mb-2 text-sm font-medium  text-white">Your Name</label>
                        <input type="Name" name="fullName" id="Name" class=" border  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Full Name" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium  text-white">Your email</label>
                        <input type="email" name="email" id="email" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium  text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" value={isSubscribed} onChange={handleChange} aria-describedby="terms" type="checkbox" class="w-4 h-4 border  rounded  focus:ring-3  bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="terms" class="font-light  text-gray-300">I accept the <a class="font-medium  hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" disabled={!isSubscribed} class="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                    <p class="text-sm font-light  text-gray-400">
                        Already have an account? <a href="/signin" class="font-medium  hover:underline text-primary-500">Login here</a>
                    </p>
                    <p class="text-sm font-light  text-gray-400">
                        Not a service provider? <a href="/signup" class="font-medium hover:underline text-primary-500">Click here</a>
                    </p>
                </form>
                <Toaster/>
            </div>
        </div>
    </div>
  </section>
  )
}

export default BuisnessSignup
import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';


const Signin = () => {
    const otpflag = "Verify your email address by entering the OTP sent to your email"
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
          const response = await axios.post("http://localhost:3000/user/login", {
            ...values,
          }
          );
          //console.log(response);
          localStorage.setItem("accessToken",response.data.accessToken)
          localStorage.setItem("userId",response.data._id)
          localStorage.setItem("email",response.data.email)
          localStorage.setItem("role",response.data.role)
          toast.success("Login successful! Redirecting to Homescreen")
          navigate("/");

        }catch (error){
            toast.error(error.response.data)
            if(error.response.data.message == otpflag){
                const id = error.response.data.userId;
                navigate("/verification", {state: {key : id}});
            }
            //console.log(error);
        }
    }
  return (
    <section class="bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-3xl font-semibold text-white">
            <img class="w-8 h-8 mr-2" src="https://api.domatron.com/storage/icons/e1d3f5/jq.svg" alt="logo"/>
              NeoVoyage
        </a>
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                    Sign in to your account
                </h1>
                <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" name="email" id="email" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                    </div>
                    <div class="text-end">
                        <a href="#" class="text-sm font-medium hover:underline text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-400">
                        Dont have an account yet? <a href="/signup" class="font-medium hover:underline text-primary-500">Sign up</a>
                    </p>
                </form>
                <Toaster/>
            </div>
        </div>
        
    </div>
    
  </section>
  )
}

export default Signin
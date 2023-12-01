import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    const message=checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message);
  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='logo'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
      
      <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
      <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
      <p className='text-red-600'>{errorMessage}</p>
      <button onClick={handleButtonClick} className='cursor-pointer p-4 my-6 bg-red-700 w-full'>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix ? Sign Up":"Already Register ? Sign In Now"}</p>
    </form>
    </>
  )
}

export default Login
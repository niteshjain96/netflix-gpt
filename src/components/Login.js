import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        console.log(isSignInForm);
        setIsSignInForm(!isSignInForm);
    }
  return (
    <>
    <Header/>
    <div className='absolute' >
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='banner'/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 mx-2'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {
            !isSignInForm ? <input type='text' placeholder='Full Name' className='p-2 m-2 w-full rounded-sm bg-gray-700'/> :''
        }
        <input type='text' placeholder='Email Address' className='p-2 m-2 w-full rounded-sm bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-2 m-2 w-full rounded-sm bg-gray-700'/>
        <button className='py-4 my-4 mx-2 bg-red-600 w-full rounded-sm'>{isSignInForm? "Sign In" :"Sign Up"}</button>
        {
            isSignInForm? <p className='py-4' >New to Netflix ? <span className='cursor-pointer' onClick={()=>toggleSignInForm()}>Sign Up Now </span></p>
            : <p className='py-4' >Already Registered ? <span className='cursor-pointer' onClick={()=>toggleSignInForm()}>Sign In</span></p>
        }
        
    </form>
    </>
  )
}

export default Login
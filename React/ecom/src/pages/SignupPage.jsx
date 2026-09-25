import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div>
        {/*example of  controlled component */} 

        <h1 className='text-center my-[30px] text-4xl font-bold '>Signup Page</h1>
      <form action="" className='flex flex-col mx-auto  p-5 gap-3 border w-[40%] min-w-[380px]'>
            <label htmlFor="">Name</label>
            <input type="text" className='border p-2'  placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input type="email" className='border p-2'  placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input type="text" className='border p-2' placeholder='enter your password' />

            <button className='bg-blue-950 text-white hover:bg-blue-700 px-4 py-2 rounded-md cursor-pointer'>Login</button>

            <p className='text-center'>Already have an account ? <Link className='text-blue-600' to={'/login'}>login</Link></p>
      </form>
    </div>
  )
}

export default SignupPage

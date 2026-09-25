import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between items-center h-[60px] px-6'>
        <h1 className='text-2xl font-bold'>Ecom Web</h1>
        <ul className='flex gap-8 text-xl'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/sorts'}>About</Link></li>
            <li><Link to={'/xyz'}>Contact</Link></li>
            <li><Link className='bg-green-500 px-3 py-2 rounded-md hover:bg-green-800 text-white' to={'/login'}>Login</Link></li>
            <li><Link className='bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-800 text-white' to={'/register'}>Signup</Link></li>
            {/* <li><a href=""></a></li> */}
        </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/sorts'}>About</Link></li>
            <li><Link to={'/xyz'}>Contact</Link></li>
            {/* <li><a href=""></a></li> */}
        </ul>
    </div>
  )
}

export default Navbar

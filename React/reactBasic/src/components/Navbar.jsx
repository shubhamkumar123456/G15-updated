// rafce
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);

  function handleShowMenu(){
    if(showmenu === false){
        setshowmenu(true)
    }
    else{
      setshowmenu(false)
    }
  }
  return (
    // <div style={{backgroundColor:"green"}}>
    <div className='navbar'>
      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <FaShoppingBag size={25}/>
         <h1>ShopWeb</h1>
      </div>
      <ul className='navUl'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cart'}>Cart</Link></li>
        <li><Link to={'/shorts'}>About</Link></li>
        <li><Link to={'/trial'}>Trial</Link></li>
         <li><Link to={'/conditional'}>Conditional</Link></li>
      </ul>


    { showmenu &&
       <ul className='navUl1'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cart'}>Cart</Link></li>
        <li><Link to={'/shorts'}>About</Link></li>
        <li><Link to={'/trial'}>Trial</Link></li>
        <li><Link to={'/conditional'}>Conditional</Link></li>
      </ul>
    }
      {/* {showmenu &&<div>
        <FiMenu/>
      </div>} */}

      <div onClick={handleShowMenu} className='menuBar'>
           <FiMenu/>
      </div>
    </div>
  )
}

export default Navbar

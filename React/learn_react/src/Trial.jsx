import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const Trial = () => {

  // Script -->
  let name = "John"
  let age = 44;

    // let x = false;
    const [x , updateX ] = useState(false)//true
    // whenever this value change . this component will re-render. will run again from top to bottom and reprint every thing

    function handleText(){
      // console.log("hello")
      if(x === false){
          updateX(true)
      }
      else{
        updateX(false)
      }
    }

    
  return (
    <div>
      <h1 className='heading'>This is Trial Page</h1>
      <p>The name of user : {name}</p>
      <p>The age of user : {age}</p>

      
{/* true */}
      { x && <p> This is dummy text </p>  }

      <button onClick={handleText}> show text</button>

    <button>Show Form</button>

      <div className='box' style={{backgroundColor:"greenyellow"}}>
        <IoMdCloseCircle  className='icon'/>
        <ul>
          <li>Apple</li>
          <li>Mango</li>
          <li>Kiwi</li>
          <li>Banana</li>
        </ul>
      </div>

    </div>
  )
}

export default Trial

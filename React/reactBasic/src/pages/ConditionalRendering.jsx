// rafce --> 
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";

const ConditionalRendering = () => {
    const [x, setx] = useState(false);

    const [y , setY] = useState('password')
    // let x = false;
     console.log(x)

    function handleClick(){
        // console.log("running")
        if(x==false){
           setx(true)
        }
        else{
           setx(false)
        }
    }


    function handleshowText(){
        if(y==='password'){
            setY('text')
        }
        else{
            setY('password')
        }
    }
  return (
    <div>
      <h1>This Conditional Rendering page</h1>


       {x  && <div>
            <h1>This is container</h1>
        </div>
        }

        <button onClick={handleClick}>Show Container</button>


        <div>
            <input type={y} placeholder='enter your password' />
            <FaEye onClick={handleshowText}/>
        </div>

    </div>
  )
}

export default ConditionalRendering

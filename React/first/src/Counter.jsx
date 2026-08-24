import React from 'react'
import { useState } from 'react';


const Counter = () => {
    // script area --> you can define any variable of function here
    // let x = 10;

    //Syntax of useStateHook--> const [variable , function] = useState(value)
    const [x , setX] = useState(10);
    console.log(x);   //10

    function handleIncrement(){
        // console.log("hello")
        // x= x+1
        // x++;//
        // console.log(x) //
        setX(x+1)
    }
  return (
    <div>
      <h1>This is counter component</h1>

      <p> count :  {x} </p>

      <button onClick={handleIncrement}>Increment</button>
      <button >Decrement</button>
      <button >Multiply by 2</button>
      <button >Divide by 2</button>
      

    </div>
  )
}

export default Counter

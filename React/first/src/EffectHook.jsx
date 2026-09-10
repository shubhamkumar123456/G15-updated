import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const EffectHook = () => {
    const[counter , setCounter] = useState(10);

    console.log(counter)

    
    useEffect(()=>{
        for(let i= 1; i<=5; i++){
        console.log(i)
             }
    }, [])  

    function handleIncrement(){
        setCounter(counter + 1)
    }
  return (
    <div>
      <h1>This is UseEffect hook component</h1>
      <p>Count = {counter}</p>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default EffectHook

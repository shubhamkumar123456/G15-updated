// rafce
import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const ReducerHookPractice = () => {

    // UseState hook example --> 
    const [count , setCount] = useState(10) ;
    console.log(count) //11
    function handleIncrement(){
        // console.log("running")
        // count++          //will not work, can not directly change the value of variable use set function to update the vale
        // setCount(count++)  // count = count+1  --> wrong way
        setCount(count+1);   // correct way
    }
    // ********************************************************************************
    // useReducer hook example -->
    function reducers(state, action){
            if(action.task==="increment krna hai"){
                return  state +1;
            }
            if(action.task ==="decrement krna hai"){
                return state -1;
            }
    }
    const [state , disptach] = useReducer( reducers , 22)

    function incrementCounter(){
        disptach({task:"increment krna hai"})
    }

    function decrementCounter(){
          disptach({task:"decrement krna hai"})
    }

  return (
    <div>
      <h1>This is Reducer hook component</h1>

        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>


        <h1>Reducer Count : {state}</h1>
        <button onClick={incrementCounter}>Increment Reducer</button>
        <button onClick={decrementCounter}>Decrement Reducer</button>
    </div>
  )
}

export default ReducerHookPractice

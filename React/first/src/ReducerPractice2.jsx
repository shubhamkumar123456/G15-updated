import React from 'react'
import { useReducer } from 'react'

const ReducerPractice2 = () => {

    function reducers(state , action){
        if(action.type ==="incrementCount"){
            let copyObj = {...state , count:state.count+1} //{data:{} , count:11}
            return copyObj
        }
    }
    const[state , dispatch] = useReducer(reducers ,{
        data:{name:"john", email:"john@gmail.com"},
        count:10
    })
  return (
    <div>
      <h1>THis is Reducer Practice component</h1>
      <p> Username = {state.data.name } </p>
      <p> Useremail = {state.data.email } </p>
      <p> Count  = {state.count } </p>
      <button onClick={()=>dispatch({type:"incrementCount"})}>Increment</button>
      <button>Update Name</button>
      <button>Update Email</button>
    </div>
  )
}

export default ReducerPractice2

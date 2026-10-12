import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail } from './redux/counterSlice'

const About = () => {
    let ctx = useSelector((state)=>state.c)
    let dispatch = useDispatch()

    // const [state , dispatch ] = useReducer(reducers , {count:0})

    function handleEmailUpdate(){
        // dispatch(call store slice`` reducers function)
        dispatch(updateEmail("shane"))
    }
  return (
    <div style={{backgroundColor:"yellow",color:"black"}}>
      <h1>This is About Page</h1>
      <h2>Count = {ctx.value}</h2>
      <h2>user name =  {ctx.user.name}</h2>
      <h2>user email =  {ctx.user.email}</h2>
      <button>Increment Count</button>
      <button>Decrement Count</button>
      <button >Update Name</button>
      <button onClick={handleEmailUpdate}>Update Email</button>
    </div>
  )
}

export default About

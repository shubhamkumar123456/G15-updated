import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Home = (props) => {
    let age = 88;
    let ctx = useContext(UserContext)
    console.log(ctx)
  return (
    <div style={{backgroundColor:"yellow",color:"brown"}}>
      <h1>This is Home Page</h1>
      <p>{props.data}</p>
      <p>{ctx.x}</p>
    </div>
  )
}

export default Home

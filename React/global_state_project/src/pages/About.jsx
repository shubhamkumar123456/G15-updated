import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const About = (props) => {
    console.log(props)   // {x:"john"}
    let ctx = useContext(UserContext)
  return (
    <div style={{backgroundColor:"crimson", color:"black"}}>
      <h1>This is ABout Page</h1>
      <p>{props.x}</p>
      <p>{ctx.x}</p>
    </div>
  )
}

export default About

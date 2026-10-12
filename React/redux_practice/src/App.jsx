import React from 'react'
import "./App.css"
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <div style={{backgroundColor:"black",color:"white", padding:"20px"}}>
        <Home/>
        <About/>
    </div>
  )
}

export default App

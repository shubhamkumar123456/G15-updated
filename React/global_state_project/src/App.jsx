
import { useContext } from 'react'
import './App.css'
import UserState from './context/UserState'
import About from './pages/About'
import Home from './pages/Home'
import UserContext from './context/UserContext'

function App() {
      let name = "john"

      let ctx = useContext(UserContext)
      console.log(ctx)
  return (
    <div style={{backgroundColor:"black" , color:"white", padding:"30px"}}>
      <p>{ctx.x}</p>
        <p>{name}</p>

        
           <Home data = {name}/>
          <About x = {name}/>
        
       
    </div>
  )
}

export default App

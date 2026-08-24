import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './Demo'
import Counter from './Counter'
import ConditionPage from './ConditionPage'
import FormPage from './FormPage'
import { FaFacebook } from "react-icons/fa";
// import X from './Demo'

function App() {
  const [x , setX] = useState(false)
  console.log(x)

  function handleCondition(){
    if(x==false){
      setX(true)
    }
    else{
      setX(false)
    }
  }
  return (
    <>
      {/* <h1> THis is my first project</h1>
      <Demo/>
      <Demo/> */}

      {/* <Demo/> */}
      {/* <Counter/> */}

<FaFacebook />
      <button>Show Dummy Page</button>
      <button>Show Counter Page</button>
      <button onClick={handleCondition}>Show Conditional Page</button>

     { x &&<ConditionPage/>}
     
     <FormPage/>

    </>
  )
}

export default App

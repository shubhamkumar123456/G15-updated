// rafce
import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import PNF from './pages/PNF'
import Navbar from './components/Navbar'
import Trial from './pages/Trial'
import './App.css'
import ConditionalRendering from './pages/ConditionalRendering'
import Demo from './pages/Demo'
import GetTagValue from './pages/GetTagValue'
import ExpenseTracker from './pages/ExpenseTracker'

const App = () => {
 
  return (
    <div>




      {/* <h1>THis is App component</h1>
      <Home/>
      <Cart/>
      <About/> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element = {<ExpenseTracker/>}/>
            <Route path='/shorts' element = {<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/trial' element={<Trial/>}/>
            <Route path='/conditional' element={<ConditionalRendering/>}/>
            <Route path="*"  element={<PNF/>}/>
        </Routes>
  
      </BrowserRouter>


    </div>
  )
}

export default App

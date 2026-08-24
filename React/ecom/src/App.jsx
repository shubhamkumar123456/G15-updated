import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <h1>This is App component</h1>
      <Home/>
      <About/>
      <Contact></Contact> */}
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sorts' element={<About/>}/>
                <Route path='/xyz' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

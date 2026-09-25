import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignupPage from './pages/SignupPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  let loginValue = false;
  return (
    <div>
      {/* <h1>This is App component</h1>
      <Home/>
      <About/>
      <Contact></Contact> */}
      <BrowserRouter>
        <Navbar/>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sorts' element={<About/>}/>
                <Route path='/xyz' element={<Contact/>}/>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/register' element={<SignupPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

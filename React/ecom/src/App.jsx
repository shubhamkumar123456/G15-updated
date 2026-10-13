import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignupPage from './pages/SignupPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ViewDetails from './pages/ViewDetails'
import ProtectedRoute from './components/ProtectedRoute'

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
                <Route path='/' element={<ProtectedRoute>
                  <Home/>
                </ProtectedRoute>}/>

                <Route path='/sorts' element={<ProtectedRoute>
                  <About/>
                </ProtectedRoute>}/>
                <Route path='/xyz' element={<Contact/>}/>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/register' element={<SignupPage/>}/>
                <Route path='/view' element={<ProtectedRoute>
                  <ViewDetails/>
                </ProtectedRoute>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

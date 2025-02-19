import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignUp from './pages/UserSignUp'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<UserSignUp />} />
    <Route path='/login' element={<UserLogin />} />
    <Route path='/captain-login' element={<CaptainLogin />} />
    <Route path='/captain-signup' element={<CaptainSignUp />} />
    
   </Routes>
  )
}

export default App

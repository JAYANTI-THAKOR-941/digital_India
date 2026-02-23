import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>  
        <Route path="/" element={<Home/>}></Route>  
      </Routes>    
    </>
  )
}

export default App
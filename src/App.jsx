// import React from 'react';
import { Routes, Route } from 
'react-router-dom';
import Login from './Pages/login/login'
// import Register from './Pages/register/register'
import Wall from './Pages/wall/wall'
import './index.css'


export default function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route path="/register" element={<Register/>} /> */}
          <Route path="/wall" element={<Wall/>} />
      </Routes>
    </div>
  )
}
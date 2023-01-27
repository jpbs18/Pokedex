import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Home } from '../views'
import React from 'react'

const Routing = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
  )
}
export default Routing

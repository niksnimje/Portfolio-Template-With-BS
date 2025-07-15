import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbaar from './Components/Navbaar'
import About from './Pages/About'
import Services from './Pages/Services'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

function AllRoutes() {
  return (
    <>
    <Navbaar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}
export default AllRoutes
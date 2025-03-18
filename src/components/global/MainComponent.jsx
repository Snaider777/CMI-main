import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import OE_Page from '../../pages/OE_Page'
import '../../styles/MainStyle.css'

function MainComponent() {
  return (
    <div className='MainComponent'>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oe" element={<OE_Page />} />
        </Routes>
    </div>
    
  )
}

export default MainComponent
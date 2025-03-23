import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import '../../styles/MainStyle.css'

function MainComponent() {
  return (
    <div className='MainComponent'>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    
  )
}

export default MainComponent

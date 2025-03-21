import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from '../../pages/Inicio'
import '../../styles/MainStyle.css'

function MainComponent() {
  return (
    <div className='MainComponent'>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </div>
    
  )
}

export default MainComponent
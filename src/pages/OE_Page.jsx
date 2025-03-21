import React from 'react'
import OE_card from '../components/locale/OE_card'
import '../styles/OE_page.css'

function OE_Page() {
  return (
    <div className='OE_Page'>
      <OE_card 
        color={['red']}
        titulo='Objetivo Estrategico 1' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B']} 
        BAR_CANTIDAD = {[1, 3]}
      />
      <OE_card 
        color={['blue']}
        titulo='Objetivo Estrategico 2' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B', 'C']}
        BAR_CANTIDAD = {[42, 32, 111]}
      />
      <OE_card 
        color={['yellow']}
        titulo='Objetivo Estrategico 3' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B', 'C','D']} 
        BAR_CANTIDAD = {[42, 322, 150, 99]}
      />
      <OE_card 
        color={['blue']}
        titulo='Objetivo Estrategico 4' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B', 'C']} 
        BAR_CANTIDAD = {[42, 32, 141]}
      />
      <OE_card 
        color={['gray']}
        titulo='Objetivo Estrategico 5' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B', 'C', 'D', 'E']} 
        BAR_CANTIDAD = {[42, 32, 11, 55, 46]}
      />
      <OE_card 
        color={['green']}
        titulo='Objetivo Estrategico 6' 
        texto='Description del objetivo estrategico con información relevante'
        BAR_DATOS = {['A', 'B', 'C']} 
        BAR_CANTIDAD = {[42, 32, 20]}
      />
      
    </div>
  )
}

export default OE_Page
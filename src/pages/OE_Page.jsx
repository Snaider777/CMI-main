import React from 'react'
import OE_card from '../components/locale/OE_card'
import '../styles/OE_page.css'
import { useState } from "react";

function OE_Page() {
  
  const [objetivos, setObjetivos] = useState([]);
  const crearObjetivo = ()=>{
    setObjetivos([...objetivos, 
      <OE_card 
        nombre = 'Objetivo'
        descripcion = 'Descripcion del objetivo'
        BAR_CANTIDAD = {[45, 90, 30, 60, 80, 55]}
        BAR_DATOS = {["Pers. 1", "Pers. 2", "Pers. 3", "Pers. 4", "Pers. 6", "Pers. 7"]}
      /> ])
  }
  return (
    <div className='OE_Page'>
    <button onClick={crearObjetivo}>
      Crear nuevo objetivo
    </button>
      {objetivos}
    </div>
  )
}
export default OE_Page
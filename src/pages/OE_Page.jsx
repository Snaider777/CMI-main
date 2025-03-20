import React from 'react'
import OE_card from '../components/locale/OE_card'
import '../styles/OE_page.css'

function OE_Page() {
  return (
    <div className='OE_Page'>
      <OE_card titulo='Objetivo Estrategico 1' texto='Description del objetivo estrategico con informacion relevante'/>
      <OE_card titulo='Objetivo Estrategico 2' texto='Description del objetivo estrategico con informacion relevante'/>
      <OE_card titulo='Objetivo Estrategico 3' texto='Description del objetivo estrategico con informacion relevante'/>
    </div>
  )
}

export default OE_Page
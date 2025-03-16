import React from 'react'
import 'boxicons/css/boxicons.min.css';
import ModoClaro from '../icons/brand-light.svg';
import ModoOscuro from '../icons/brand-dark.svg';

function SidebarComponent() {
  return (
    <div className='SidebarComponent'>


        <div className="menu-btn">
            <i class='bx bx-chevron-left'></i>
        </div>

        <div className="brand">
            <img src={ModoClaro} alt="logo" />
            <span>USO</span>
        </div>


    </div>
  )
}

export default SidebarComponent
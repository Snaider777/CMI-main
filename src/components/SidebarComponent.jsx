import React, { useState, useRef } from 'react';
import '../styles/SidebarStyle.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import ModoClaro from '../icons/brand-light.svg';
import user from '../icons/user.png';

function SidebarComponent() {
  // Estados para controlar la visibilidad de los submenús
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isFileOpen, setIsFileOpen] = useState(false);

  // Referencias para los submenús
  const storeMenuRef = useRef(null);
  const fileMenuRef = useRef(null);

  // Función para alternar el submenú de Store
  const toggleStoreMenu = () => {
    const subMenu = storeMenuRef.current;
    if (isStoreOpen) {
      subMenu.style.height = '0px';
    } else {
      subMenu.style.height = `${subMenu.scrollHeight}px`;
    }
    setIsStoreOpen(!isStoreOpen);
  };

  // Función para alternar el submenú de File
  const toggleFileMenu = () => {
    const subMenu = fileMenuRef.current;
    if (isFileOpen) {
      subMenu.style.height = '0px';
    } else {
      subMenu.style.height = `${subMenu.scrollHeight}px`;
    }
    setIsFileOpen(!isFileOpen);
  };

  return (
    <div className='SidebarComponent'>
      <div className="Header">
        <div className="menu-btn">
          <i className='bx bx-chevron-left'></i>
        </div>
        <div className="brand">
          <img src={ModoClaro} alt="logo" />
          <span>USO</span>
        </div>
      </div>

      <div className="MenuContainer">
        <div className="search">
          <i className='bx bx-search'></i>
          <input type="search" placeholder='Search' />
        </div>

        <ul className="menu">
          <li className="menu-item menu-item-static active">
            <Link to="/" className='menu-link'>
              <i className='bx bx-home-alt-2'></i>
              <span>Home</span>
            </Link>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className='menu-link'>
              <i className='bx bx-bar-chart-alt-2'></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Menú desplegable para Store */}
          <li className={`menu-item menu-item-dropdown ${isStoreOpen ? 'open' : ''}`}>
            <div className='menu-link' onClick={toggleStoreMenu}>
              <i className='bx bx-shopping-bag'></i>
              <span>Store</span>
              <i className={`bx ${isStoreOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </div>
            <ul className="sub-menu" ref={storeMenuRef} style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}>
              <li>
                <Link className='Sub-menu-link'>Products</Link>
              </li>
              <li>
                <Link className='Sub-menu-link'>Orders</Link>
              </li>
              <li>
                <Link className='Sub-menu-link'>Subscriptions</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className='menu-link'>
              <i className='bx bx-task'></i>
              <span>Task</span>
            </Link>
          </li>

          {/* Menú desplegable para File */}
          <li className={`menu-item menu-item-dropdown ${isFileOpen ? 'open' : ''}`}>
            <div className='menu-link' onClick={toggleFileMenu}>
              <i className='bx bx-file-blank'></i>
              <span>File</span>
              <i className={`bx ${isFileOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </div>
            <ul className="sub-menu" ref={fileMenuRef} style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}>
              <li>
                <Link className='Sub-menu-link'>Images</Link>
              </li>
              <li>
                <Link className='Sub-menu-link'>Audios</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul className="menu">
          <li className="menu-item menu-item-static">
            <Link to="/" className='menu-link'>
              <i className='bx bx-bell'></i>
              <span>Notifications</span>
            </Link>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className='menu-link'>
              <i className='bx bx-cog'></i>
              <span>Setting</span>
            </Link>
          </li>
        </ul>

        <div className="user">
          <div className="user-img">
            <img src={user} alt="" />
          </div>
          <div className="user-data">
            <span className="name">Jonathan</span>
            <span className="email">hola@uso.com</span>
          </div>

          <div className="user-icon">
            <i className='bx bx-exit'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
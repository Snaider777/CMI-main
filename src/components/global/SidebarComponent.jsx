import React, { useState } from 'react';
import '../../styles/SidebarStyle.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import LOGO from '../../icons/logoUSO.png';
import user from '../../icons/user.png';

function SidebarComponent() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`SidebarComponent ${isMinimized ? 'minimize' : ''}`}>
      <div className="header">
        <div className="menu-btn" id="menu-btn" onClick={toggleSidebar}>
          <i className={`bx ${isMinimized ? 'bx-chevron-right' : 'bx-chevron-left'}`}></i>
        </div>
        <div className="brand">
          <img className="brand-light" src={LOGO} alt="logo" />
          <span>USO</span>
        </div>
      </div>

      <div className="menu-container">
        <div className="search">
          <i className="bx bx-search"></i>
          <input type="search" placeholder="Search" />
        </div>

        <ul className="menu">
          <li title='Inicio' className="menu-item menu-item-static active">
            <Link to={'/'} className="menu-link">
              <i className="bx bx-home-alt-2"></i>
              <span>Inicio</span>
            </Link>
          </li>

          <li title='Panel' className="menu-item menu-item-static">
            <Link to={'/Panel'} className="menu-link">
              <i className="bx bx-bar-chart-alt-2"></i>
              <span>Panel</span>
            </Link>
          </li>

          <li title='Usruarios' className="menu-item menu-item-static">
            <Link to={'/usuarios'} className="menu-link">
              <i className="bx bx-user"></i>
              <span>Usuarios</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul className="menu">
          <li title='Notificaciones' className="menu-item menu-item-static">
            <Link to={'/notificaciones'} className="menu-link">
              <i className="bx bx-bell"></i>
              <span>Notificaciones</span>
            </Link>
          </li>

          <li title='Ajustes' className="menu-item menu-item-static">
            <Link to={'/ajuestes'} className="menu-link">
              <i className="bx bx-cog"></i>
              <span>Ajustes</span>
            </Link>
          </li>
        </ul>
        <div className="user">
          <div className="user-img">
            <img src={user} alt="user" />
          </div>
          <div className="user-data">
            <span className="name">John Walker</span>
            <span className="email">jhon@gmail.com</span>
          </div>
          <div className="user-icon">
            <i className="bx bx-exit"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
import React from 'react';
import '../../styles/SidebarStyle.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import LOGO from '../../icons/logoUSO.png';
import user from '../../icons/image.png';

function SidebarComponent() {
  return (
    
    <div className="SidebarComponent open">

      {/*HEADER DEL SIDEBAR CON EL LOGO Y EL BOTON DE MENU - INICIO*/}
      <div className="Header">
        <div className="menu-btn">
          <i className="bx bx-chevron-left"></i>
        </div>
        <div className="brand">
          <img src={LOGO} alt="logo" />
          <span>Admin</span>
        </div>
      </div>
      {/*HEADER DEL SIDEBAR CON EL LOGO Y EL BOTON DE MENU - FIN*/}


      {/*CONTENIDO DEL SIDEBAR - INICIO*/}
      <div className="MenuContainer">

        {/*BUSCADOR - INICIO*/}
        <div className="search">
          <i className="bx bx-search"></i>
          <input type="search" placeholder="Search" />
        </div>
        {/*BUSCADOR - FIN*/}


        {/*MENU - HOME INICIO*/}
        <ul className="menu">
          <li className="menu-item menu-item-static active">
            <Link to="/" className="menu-link">
              <i className="bx bx-home-alt-2"></i>
              <span>Inicio</span>
            </Link>
          </li>
          {/*MENU - HOME FIN*/}

          {/*MENU - PANEL INICIO*/}
          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className="menu-link">
              <i className="bx bx-bar-chart-alt-2"></i>
              <span>Panel</span>
            </Link>
          </li>
          {/*MENU - PANEL FIN*/}
            
          {/*MENU - USUARIOS INICIO*/}
          <li className="menu-item menu-item-dropdown">
            <div className="menu-link">
              <i class='bx bx-user' ></i>
              <span>Usuarios</span>
              <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="Sub-menu-link">Mi perfil</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Crear nuevo usuario</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Roles y Permisos</Link>
              </li>
            </ul>
          </li>
          {/*MENU - USUARIOS FIN*/}
            

          {/*MENU - TAREAS INICIO*/}
          <li className="menu-item menu-item-dropdown">
            <div className="menu-link">
              <i className="bx bx-task"></i>
              <span>Tareas</span>
              <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="Sub-menu-link">En progreso</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Terminadas</Link>
              </li>
            </ul>
          </li>
          {/*MENU - TAREAS FIN*/}


          
        </ul>
        {/*MENU - HOME FINAL*/}



      </div>
      {/*CONTENIDO DEL SIDEBAR - FIN*/}


      {/*CONTENIDO DEL FOOTER - INICIO*/}
      <div className="footer">
        <ul className="menu">
          <li className="menu-item menu-item-static">
            <Link to="/" className="menu-link">
              <i className="bx bx-bell"></i>
              <span>Notificaciones</span>
            </Link>
          </li>
          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className="menu-link">
              <i className="bx bx-cog"></i>
              <span>Ajustes</span>
            </Link>
          </li>
        </ul>
        <div className="user">
          <div className="image-img">
            <img src={user} alt="" />
          </div>
          <div className="user-data">
            <span className="name">Eduardo</span>
            <span className="email">Iraheta@icloud.com</span>
          </div>
          <div className="user-icon">
            <i className="bx bx-exit"></i>
          </div>
        </div>
      </div>
      {/*CONTENIDO DEL FOOTER - FIN*/}


    </div>
  );
}

export default SidebarComponent;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import user from "../icons/ivan.png";
import Home from "../icons/Home.svg";
import Dashboard from "../icons/dashboard.svg";
import task from "../icons/task.svg";
import users from "../icons/users.svg";
import search from "../icons/search.svg";
import settings from "../icons/settings.svg";
import "../styles/SidebarStyle.css";

function SidebarComponent({ isSidebarOpen }) {
  // Estados para controlar las listas desplegables
  const [isTasksDropdownOpen, setTasksDropdownOpen] = useState(false);
  const [isUsersDropdownOpen, setUsersDropdownOpen] = useState(false);

  // Referencias para detectar clics fuera de las listas desplegables
  const tasksDropdownRef = useRef(null);
  const usersDropdownRef = useRef(null);

  // Funciones para alternar las listas desplegables
  const toggleTasksDropdown = () => {
    setTasksDropdownOpen(!isTasksDropdownOpen);
  };

  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!isUsersDropdownOpen);
  };

  // Cerrar las listas desplegables al hacer clic fuera de ellas
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tasksDropdownRef.current &&
        !tasksDropdownRef.current.contains(event.target)
      ) {
        setTasksDropdownOpen(false);
      }
      if (
        usersDropdownRef.current &&
        !usersDropdownRef.current.contains(event.target)
      ) {
        setUsersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`SidebarComponent ${isSidebarOpen ? "open" : "closed"}`}>
      {/* SidebarMenu */}
      <div className="SidebarMenu">
        <ul>
          <li>
            <Link to="d4" className="Link">
              <img src={search} alt="lupa-icon" />
              <span>Buscar</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="Link">
              <img src={Home} alt="inicio-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/d1" className="Link">
              <img src={Dashboard} alt="D1-icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Tareas con lista desplegable */}
          <li ref={tasksDropdownRef} onClick={toggleTasksDropdown}>
            <div className="Link">
              <img src={task} alt="D2-icon" />
              <span>Tareas</span>
            </div>
            {isTasksDropdownOpen && (
              <ul className="DropdownMenu">
                <li>
                  <Link to="/tasks/all" className="DropdownLink">
                    Todas las Tareas
                  </Link>
                </li>
                <li>
                  <Link to="/tasks/in-progress" className="DropdownLink">
                    En Progreso
                  </Link>
                </li>
                <li>
                  <Link to="/tasks/done" className="DropdownLink">
                    Terminadas
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Usuarios con lista desplegable */}
          <li ref={usersDropdownRef} onClick={toggleUsersDropdown}>
            <div className="Link">
              <img src={users} alt="D3-icon" />
              <span>Usuarios</span>
            </div>
            {isUsersDropdownOpen && (
              <ul className="DropdownMenu">
                <li>
                  <Link to="/users/profile" className="DropdownLink">
                    Mi Perfil
                  </Link>
                </li>
                <li>
                  <Link to="/users/create" className="DropdownLink">
                    Crear Nuevo Usuario
                  </Link>
                </li>
                <li>
                  <Link to="/users/roles" className="DropdownLink">
                    Roles y Permisos
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* SidebarFooter */}
      <div className="SidebarFooter">
        <ul>
          {/*<li>
            <Link to="/config" className="Link">
              <img src={settings} alt="D5-icon" />
              <span>Configuracion</span>
            </Link>
          </li>*/}
        </ul>
      </div>
    </div>
  );
}

export default SidebarComponent;
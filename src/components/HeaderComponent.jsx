import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../icons/menu.svg';
import uso from '../img/logoUSO.png';
import lupa from '../icons/search.svg';
import help from '../icons/help.svg';
import '../styles/HeaderStyle.css';
import { logout } from '../api/auth';

function HeaderComponent({ toggleSidebar }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setIsSearchActive(prevState => !prevState);
  };
  // Función para cerrar sesi
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  return (
    <>
      <div className={`search ${isSearchActive ? 'toggle' : ''}`}>
        <img src={lupa} alt="Buscar" />
        <input
          type="text"
          placeholder="Buscar"
          onClick={handleSearchClick}
        />
      </div>
      <div
        className={`searchBackground ${isSearchActive ? 'toggle' : ''}`}
        onClick={() => setIsSearchActive(false)}
      ></div>
      <header>
        <div className="left">
          <div className="MenuBtn" onClick={toggleSidebar}>
            <img src={menu} alt="Menú" />
          </div>
          <img src={uso} alt="Logo USO" className="brand-icon" />
          <span className="brand-name">ADMINISTRADOR</span>
        </div>
        <div className="right">
          <img
            src={lupa}
            alt="Buscar"
            className="search-icon"
            onClick={handleSearchClick}
          />
          <img src={help} alt="Ayuda" />
          {/* Botón para cerrar sesión */}
          <button className="logout-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;

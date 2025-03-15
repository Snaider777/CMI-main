import React, { useState } from 'react';
import menu from '../icons/menu.svg';
import uso from '../img/logoUSO.png';
import lupa from '../icons/search.svg';
import help from '../icons/help.svg';
import '../styles/HeaderStyle.css';

function HeaderComponent({ toggleSidebar }) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive); // Alterna entre true y false
  };

  const handleOutsideClick = () => {
    setIsSearchActive(false); // Cierra el buscador al hacer clic fuera
  };

  return (
    <>
      <div className={`search ${isSearchActive ? 'toggle' : ''}`}>
        <img src={lupa} alt=""/>
        <input
          type="text"
          placeholder="Buscar"
          onClick={handleSearchClick}
        />
      </div>
      <div
        className={`searchBackground ${isSearchActive ? 'toggle' : ''}`}
        onClick={() => setIsSearchActive(false)} // Cierra al hacer clic en el fondo
      ></div>

      <header>
        <div className="left">
          <div className="MenuBtn" onClick={toggleSidebar}>
            <img src={menu} alt="menu-icon" />
          </div>
          <img src={uso} alt="uso-icon" className="brand-icon" />
          <span className="brand-name">ADMINISTRADOR</span>
        </div>

        <div className="right">
          <img src={lupa} alt="lupa-icon" className="search-icon" onClick={handleSearchClick}/>
          <img src={help} alt="help-icon" />
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
import React, { useState } from 'react';
import menu from '../icons/menu.svg';
import uso from '../icons/logoUSO.png';
import lupa from '../icons/search.svg';
import sun from '../icons/sun.svg';
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
      <header>
        <div className="left">
          <div className="MenuBtn" onClick={toggleSidebar}>
            <img src={menu} alt="menu-icon" />
          </div>
          <img src={uso} alt="uso-icon" className="brand-icon" />
          <span className="brand-name">ADMINISTRADOR</span>
        </div>

        <div className="right">
          <img src={sun} alt="help-icon" />
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
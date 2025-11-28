import React from 'react';
import NavigationMenu from './navigationmenu'; // Ojo con mayus/minus según tu archivo
import { Link } from 'react-router-dom';
import './header.css'; // ¡IMPORTANTE! Crearemos este archivo ahora

const Header = () => {
  return (
    <header className="site-header">
      {/* --- PARTE SUPERIOR (Logo, Buscador, Cesta) --- */}
      <div className="top-bar-container">
        
        {/* 1. Logo */}
        <div className="logo-section">
          <Link to="/">
            {/* Usamos el logo oficial SVG de Wikipedia */}
            <img 
  src="https://upload.wikimedia.org/wikipedia/commons/2/23/Mercadona_logo.svg" 
  alt="Mercadona" 
  className="mercadona-logo" 
  width="180" 
  style={{ display: 'block' }} // Asegura que se vea
/>
          </Link>
        </div>

        {/* 2. Buscador */}
        <div className="search-section">
          <input type="text" placeholder="Buscar productos..." className="search-input" />
        </div>

        {/* 3. Botones derecha */}
        <div className="user-actions">
          <button className="btn-action">Mi Cuenta</button>
          <button className="btn-cesta">Cesta</button>
        </div>
      </div>

      {/* --- PARTE INFERIOR (Menú Verde) --- */}
      <NavigationMenu />
    </header>
  );
};

export default Header;
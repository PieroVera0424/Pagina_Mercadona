import React from 'react';
import NavigationMenu from './navigationmenu'; 
import { Link } from 'react-router-dom';
import './header.css'; 

// 1. IMPORTAMOS LA IMAGEN LOCAL
// (Asegúrate de que el nombre del archivo en 'assets' es exactamente 'mercadona.svg')
import logoMercadona from '../assets/mercadona.svg'; 

const Header = () => {
  return (
    <header className="site-header">
      {/* --- PARTE SUPERIOR (Logo, Buscador, Cesta) --- */}
      <div className="top-bar-container">
        
        {/* 1. Logo */}
        <div className="logo-section">
          <Link to="/">
            {/* 2. USAMOS LA VARIABLE AQUÍ (entre llaves {}) */}
            <img 
              src={logoMercadona} 
              alt="Mercadona" 
              className="mercadona-logo" 
              // Quitamos el width="180" de aquí porque ya lo controlamos mejor por CSS
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
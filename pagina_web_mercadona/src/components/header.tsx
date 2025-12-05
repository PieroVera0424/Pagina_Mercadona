import React from 'react';
import { Link } from 'react-router-dom';
import logoMercadona from '../assets/mercadona.svg';
import './header.css';

const Header = () => {
  const count = 0; // O usa tu useCart()

  // Quitamos 'Conócenos' de aquí para que no sea un producto
  const productLinks = [
    { name: 'Alimentación', slug: 'alimentacion' },
    { name: 'Droguería', slug: 'drogueria' },
    { name: 'Perfumería', slug: 'perfumeria' },
    { name: 'Mascotas', slug: 'mascotas' },
    { name: 'Bebé', slug: 'bebe' }
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        
        {/* LOGO */}
        <div className="header-left">
          <Link to="/">
            <img src={logoMercadona} alt="Mercadona" className="mercadona-logo" />
          </Link>
        </div>

        {/* MENÚ CENTRAL */}
        <nav className="header-center">
          
          {/* 1. ENLACE MANUAL A CONÓCENOS (Ruta limpia) */}
          <Link to="/conocenos" className="nav-link">
            Conócenos
          </Link>

          {/* 2. RESTO DE ENLACES (Rutas de productos) */}
          {productLinks.map((link) => (
            <Link 
              key={link.slug} 
              to={`/productos/${link.slug}`} 
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DERECHA */}
        <div className="header-right">
           <button className="btn-clean">Mi Cuenta</button>
           <button className="btn-cesta-clean">
             Cesta 
             {count > 0 && <span className="cart-badge">{count}</span>}
           </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
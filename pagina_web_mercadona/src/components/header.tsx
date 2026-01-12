import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoMercadona from '../assets/mercadona.svg';
import './header.css';

const Header = () => {
  // Estado local para el contador (o usa useCart si ya tienes el contexto configurado)
  const [count, setCount] = useState(0);

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
        
        {/* IZQUIERDA: LOGO */}
        <div className="header-left">
          <Link to="/">
            <img src={logoMercadona} alt="Mercadona" className="mercadona-logo" />
          </Link>
        </div>

        {/* CENTRO: MENÚ */}
        <nav className="header-center">
          {/* 1. Tu enlace manual a Conócenos */}
          <Link to="/conocenos" className="nav-link">
            Conócenos
          </Link>

          {/* 2. Los enlaces de productos */}
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

        {/* DERECHA: CESTA */}
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
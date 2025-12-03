import React from 'react';
import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext'; // <--- Descomenta esto si ya creaste el Contexto
import logoMercadona from '../assets/mercadona.svg';
import './header.css';

const Header = () => {
  // Si ya tienes el CartContext creado, descomenta la siguiente línea y borra "const count = 0;"
  // const { count } = useCart(); 
  const count = 0; // <--- Valor temporal para que no te de error ahora mismo

  const links = [
    { name: 'Conocénos', slug: 'conocénos' },
    { name: 'Supermercados', slug: 'supermercados' },
    { name: 'Trabaja con nosotros', slug: 'trabaja con nosotros' },
    { name: 'Atención al cliente', slug: 'atención al cliente' },
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

        {/* CENTRO: ENLACES VERDES (Alineados horizontalmente) */}
        <nav className="header-center">
          {links.map((link) => (
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
             {/* El badge solo saldrá si count es mayor que 0 */}
             {count > 0 && <span className="cart-badge">{count}</span>}
           </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
// 1. AÑADIMOS { useState } AQUÍ
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext'; // Si usas el contexto, descomenta esto
import logoMercadona from '../assets/mercadona.svg';
import './header.css';

const Header = () => {
  // Si usas el contexto del carrito:
  // const { count } = useCart();
  
  // O si estás usando un estado local (que parece ser el caso por el error):
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
        
        {/* LOGO */}
        <div className="header-left">
          <Link to="/">
            <img src={logoMercadona} alt="Mercadona" className="mercadona-logo" />
          </Link>
        </div>

        {/* MENÚ CENTRAL */}
        <nav className="header-center">
          <Link to="/conocenos" className="nav-link">
            Conócenos
          </Link>

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
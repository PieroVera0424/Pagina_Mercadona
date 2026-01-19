import React from 'react';
import { Link } from 'react-router-dom';
import './navigationmenu.css';

const NavigationMenu = () => {
  const categories = [
    { name: 'Alimentación', slug: 'alimentacion' },
    { name: 'Droguería', slug: 'drogueria' },
    { name: 'Perfumería', slug: 'perfumeria' },
    { name: 'Mascotas', slug: 'mascotas' },
    { name: 'Bebé', slug: 'bebe' }
  ];

  return (
    <nav className="nav-menu-container">
      <ul className="nav-list">
        {categories.map((cat) => (
          <li key={cat.slug} className="nav-item">
            <Link to={`/productos/${cat.slug}`} className="nav-link">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
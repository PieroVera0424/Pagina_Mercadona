import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'; // Crearemos este CSS en el paso 3

const categories = [
  { name: 'Alimentación', slug: 'alimentacion' },
  { name: 'Droguería', slug: 'drogueria' },
  { name: 'Perfumería', slug: 'perfumeria' },
  { name: 'Mascotas', slug: 'mascotas' },
  { name: 'Bebé', slug: 'bebe' }
];

const NavigationMenu: React.FC = () => {
  return (
    <nav className="nav-menu">
      <ul>
        {categories.map((cat) => (
          <li key={cat.slug}>
            {/* Aquí está la magia de la ruta dinámica */}
            <Link to={`/productos/${cat.slug}`}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // ¡Importante!

const Layout = () => {
  return (
    <div className="layout-container">
      {/* El Header ya está fuera del Layout en App.tsx, así que aquí solo main y footer */}
      <main>
        <Outlet />
      </main>
      
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Sobre Mercadona</h4>
            <ul>
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Sala de prensa</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Atención al cliente</h4>
            <ul>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Enlaces de interés</h4>
            <ul>
              <li><a href="#">Supermercados</a></li>
              <li><a href="#">Consejos</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mercadona S.A. Todos los derechos reservados. (Proyecto Académico)</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
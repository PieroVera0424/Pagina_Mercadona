import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import callCenterIcon from '../assets/call-center.png';

// 1. IMPORTAMOS LOS ICONOS DE REACT-ICONS (Font Awesome 5)
import { FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="layout-container">
      <main>
        <Outlet />
      </main>
      
      <footer className="site-footer">
        <div className="footer-content">
          
          {/* Columna 1 */}
          <div className="footer-col">
            <h4>Cliente</h4>
            <ul>
              <li><a href="#">Supermercados</a></li>
              <li><a href="#">Consejos</a></li>
              <li><a href="#">Factura cliente</a></li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="footer-col">
            <h4>Trabajador</h4>
            <ul>
              <li><a href="#">Trabajo con nosotros</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="footer-col">
            <h4>Proveedor</h4>
            <ul>
              <li><a href="#">Factura-me</a></li>
              <li><a href="#">Portal Trinidad</a></li>
            </ul>
          </div>
        
          {/* Columna 4 */}
          <div className="footer-col">
            <h4>Sociedad</h4>
            <ul>
              <li><a href="#">Actualidad</a></li>
              <li><a href="#">Sala de prensa</a></li>
              <li><a href="#">Conoce Mercadona</a></li>
              <li><a href="#">Cuidemos el planeta</a></li>
            </ul>
          </div>

          {/* Columna 5: Atención al cliente + Redes Sociales */}
          <div className="footer-col call-center-col">
  
            
            <div className="phone-container">
              <img src={callCenterIcon} alt="Teléfono" className="call-center-icon" />
              <p className="phone-number">800 500 220</p>
            </div>

            {/* 2. NUEVO CONTENEDOR PARA REDES SOCIALES */}
            <div className="social-media-container">
              {/* Usamos enlaces <a> para cada icono */}
              <a href="#" className="social-icon" aria-label="Contacto"><FaEnvelope /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="X (Twitter)"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>

          </div>

        </div>
        
        {/* Copyright */}
        <div className="footer-legal-bar">
          <div className="legal-content">
            <span className="copyright">
              © Mercadona S.A. A46103834. Todos los derechos reservados.
            </span>
            <div className="legal-links">
              <a href="#">Accesibilidad</a>
              <a href="#">Política de privacidad</a>
              <a href="#">Política de cookies</a>
              <a href="#">Términos y condiciones</a>
            </div>
          </div>
        </div>
        
        {/* La franja verde final */}
        <div className="footer-green-strip"></div>
        {/* --- FIN DE LA MODIFICACIÓN --- */}

      </footer>
    </div>
  );
};

export default Layout;
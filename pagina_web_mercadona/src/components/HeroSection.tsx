import React from 'react';
import './HeroSection.css'; // Importamos los estilos que crearemos abajo

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Título con fuente Serif (tipo periódico) como Mercadona */}
        <h1 className="hero-title">
          Empieza tu compra <br /> en Mercadona
        </h1>
        
        <p className="hero-description">
          Introduce tu código postal y dependiendo de tu ciudad accederás 
          a la nueva compra online o a la web clásica.
        </p>

        {/* Formulario de Código Postal */}
        <form className="postal-form">
          <input 
            type="text" 
            placeholder="Código postal" 
            className="postal-input" 
          />
          <button type="submit" className="postal-btn">
            ENTRAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
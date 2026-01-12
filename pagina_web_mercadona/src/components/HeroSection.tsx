import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      
      <div className="hero-header__content">
        
        <h1 className="hero-title">
          Empieza tu compra <br /> en Mercadona
        </h1>

        <p className="hero-description">
          Introduce tu código postal y dependiendo de tu ciudad accederás 
          a la nueva compra online o a la web clásica.
        </p>

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

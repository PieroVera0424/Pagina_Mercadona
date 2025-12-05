import React from 'react';
import './NewStoreSection.css';

const NewStoreSection = () => {
  return (
    <section className="new-store-section">
      <div className="new-store-container">
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="ns-image-col">
          {/* Usamos una imagen de trabajador de almacén */}
          <img 
            src="https://www.mercadona.es/static/media/notify-me.9afc6f9f70166e8a7038.jpeg" 
            alt="Trabajador Mercadona Almacén" 
          />
        </div>

        {/* COLUMNA DERECHA: TEXTO */}
        <div className="ns-text-col">
          <h2 className="ns-title">
            Nueva tienda online en <br /> algunas zonas
          </h2>
          
          <p className="ns-description">
            Por el momento, la nueva app y web está disponible en Valencia, 
            Barcelona, Madrid y otras poblaciones. Introduce tu código postal 
            arriba para ver si repartimos en tu zona. Si aún no llegamos, 
            ¡apúntate y te avisamos!
          </p>
          
          <a href="#" className="ns-link">
            Avísame
          </a>
        </div>

      </div>
    </section>
  );
};

export default NewStoreSection;
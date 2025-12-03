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
            src="https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?q=80&w=2670&auto=format&fit=crop" 
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
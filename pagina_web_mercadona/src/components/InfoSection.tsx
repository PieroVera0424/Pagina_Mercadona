import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="info-text-col">
          <h2 className="info-title">Compra online</h2>
          <p className="info-description">
            Recibe tu pedido en casa con la misma <br />
            calidad y frescura de siempre.
          </p>
        </div>

        {/* LADO DERECHO: IMAGEN */}
        <div className="info-image-col">
          {/* He buscado una imagen de supermercado parecida a la tuya */}
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop" 
            alt="Compra Online Mercadona" 
          />
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
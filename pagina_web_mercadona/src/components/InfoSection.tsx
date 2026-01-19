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
            src="https://www.mercadona.es/static/media/worker.dec0a9488b0f619a21f3.jpeg" 
            alt="Compra Online Mercadona" 
          />
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
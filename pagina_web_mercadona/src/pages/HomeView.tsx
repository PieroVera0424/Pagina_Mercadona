import React from 'react';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-page">
      
      {/* --- HERO SUPERIOR --- */}
      <div className="home-container">
        <div className="home-image-section">
          {/* Imagen Hero: Ingredientes frescos */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
            alt="Alimentos frescos" 
            className="hero-image"
          />
        </div>
        <div className="home-content-section">
          <h1 className="hero-title">Empieza tu compra <br /> en Mercadona</h1>
          <p className="hero-subtitle">Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.</p>
          <div className="zip-code-form">
            <input type="text" placeholder="Código postal" className="zip-input" maxLength={5} />
            <button className="btn-entrar">ENTRAR</button>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 1: COMPRA ONLINE (Texto Izq - Foto Der) --- */}
      <section className="info-section">
        <div className="info-text">
          <h2>Compra online</h2>
          <p>Recibe tu pedido en casa con la máxima calidad y frescura de siempre.</p>
        </div>
        <div className="info-image">
          {/* HE CAMBIADO ESTA IMAGEN POR UNA QUE FUNCIONA (Bolsa de la compra) */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
            alt="Compra online" 
            // Usamos la misma imagen de alimentos frescos arriba para consistencia, 
            // o puedes probar esta otra de una persona comprando:
            // src="https://images.unsplash.com/photo-1581566493976-13a69a052565?q=80&w=1000&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* --- SECCIÓN 2: NUEVA TIENDA (Foto Izq - Texto Der) --- */}
      <section className="info-section reverse">
        <div className="info-image">
          {/* Foto de trabajador */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
            alt="Trabajador Mercadona" 
          />
        </div>
        <div className="info-text">
          <h2>Nueva tienda online en algunas zonas</h2>
          <p>Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. Introduce tu código postal arriba para ver si repartimos en tu zona.</p>
          {/* Añadido el símbolo > */}
          <a href="#" className="link-green">Avísame &gt;</a>
        </div>
      </section>

      {/* --- BANNER FINAL GRANDE --- */}
      <section className="bottom-banner">
        <div className="bottom-content">
          <h2>Empieza tu compra <br /> en Mercadona</h2>
          <div className="zip-code-form">
            <input type="text" placeholder="Código postal" className="zip-input" maxLength={5} />
            <button className="btn-entrar">ENTRAR</button>
          </div>
          <div className="app-buttons">
            <button className="btn-store">🍏 App Store</button>
            <button className="btn-store">▶ Google Play</button>
          </div>
        </div>
        <div className="bottom-image-container">
          {/* Imagen ancha de verduras */}
          <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2000&auto=format&fit=crop" alt="Verduras y aceite" />
        </div>
      </section>

    </div>
  );
};

export default HomeView;
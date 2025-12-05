import React, { useState } from 'react';
import './AboutView.css';

// --- 1. IMPORTAMOS TUS IMÁGENES LOCALES ---
// ".." significa salir de la carpeta pages, y luego entramos en "assets"
import imgFiestas from '../assets/fiestas.jpg';
import imgRecetas from '../assets/recetas.jpg';
import imgTablas from '../assets/tablas.jpg';
import imgCocinamos from '../assets/cocina.jpg';
import imgPerfumería from '../assets/perfume.jpg';
import imgNuestrosHechos from '../assets/hechos.jpg';
// (Si prefieres otra tercera imagen, puedes importar 'nuestros-hechos.jpg' por ejemplo)

// --- 2. USAMOS LAS VARIABLES EN EL ARRAY ---
const slides = [
  {
    id: 1,
    image: imgFiestas, // <--- Aquí ponemos la variable directamente (sin comillas)
    title: 'Prepara las fiestas con nuestra Revista',
    button: 'Ver Revista'
  },
  {
    id: 2,
    image: imgRecetas,
    title: 'Recetas exprés para tu día a día',
    button: 'Ver Consejo'
  },
  {
    id: 3,
    image: imgTablas,
    title: 'Tablas de charcutería,!Irresistibles!',
    button: 'Ver Consejo'
  },
  {
    id: 4,
    image: imgCocinamos,
    title: '!En Navidad cocinamos por ti!',
    button: 'Ver Consejo'
  },
  {
    id: 5,
    image: imgPerfumería,
    title: '!Lotes de Perfumería para regalar!',
    button: 'Ver Consejo'
  },
  {
    id: 6,
    image: imgNuestrosHechos,
    title: 'Nuestros Hechos en 2024',
    button: 'Ver Memoria Anual'
  }
];

const AboutView = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="about-container">
      
      {/* BARRA DE NAVEGACIÓN VERDE */}
      <nav className="about-nav">
        <ul className="about-nav-list">
          <li className="active">Conócenos</li>
          <li>Consejos</li>
          <li>Actualidad</li>
          <li>Atención al Cliente</li>
          <li>Cuidemos el Planeta</li>
        </ul>
      </nav>

      {/* SLIDER CON TUS FOTOS */}
      <section 
        className="about-hero"
        // React se encarga de poner la ruta correcta del archivo importado
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }} 
      >
        <button className="arrow-btn left" onClick={prevSlide}>&#10094;</button>

        <div className="about-hero-content">
          <h1 className="about-title">{slides[currentSlide].title}</h1>
          <button className="about-btn">{slides[currentSlide].button}</button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>&#10095;</button>
      </section>

      {/* CONTENIDO DEBAJO */}
      <section className="about-body">
        <h2>Actualidad Mercadona</h2>
        <p>
          Trabajamos para satisfacer las necesidades de nuestros "Jefes", ofreciendo productos de máxima calidad al mejor precio posible.
        </p>
      </section>

    </div>
  );
};

export default AboutView;
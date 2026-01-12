import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import NewStoreSection from '../components/NewStoreSection'; // <--- 1. IMPORTAR
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-container">
      
      <HeroSection />      {/* 1. Portada */}
      
      <InfoSection />      {/* 2. Compra Online (Fondo Blanco) */}

      <NewStoreSection />  {/* 3. Nueva Tienda (Fondo Gris) */}
      
    </div>
  );
};

export default HomeView;
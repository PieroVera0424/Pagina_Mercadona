import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTS: Fíjate que aquí pongo la ruta en minúsculas porque tu archivo es 'header.tsx'
import Header from './components/header'; 

// Estos componentes asumo que los tienes o los crearán pronto
// Si alguno te da error porque no existe, puedes comentarlo temporalmente con //
import Layout from './components/Layout'; 
import HomeView from './pages/HomeView';
import ProductListView from './pages/ProductListView';

function App() {
  return (
    <BrowserRouter>
      {/* Colocamos el Header aquí para verlo siempre */}
      <Header />

      <Routes>
        {/* Ruta principal que usa el Layout */}
        <Route path="/" element={<Layout />}>
          
          {/* Ruta de Inicio */}
          <Route index element={<HomeView />} />
          
          {/* Ruta Dinámica para las categorías (LA CLAVE DE TU PROYECTO) */}
          <Route 
            path="productos/:category" 
            element={<ProductListView />} 
          />
          
          {/* Ruta de error 404 */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
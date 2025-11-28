// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container">
      {/* El Outlet es donde se pintarán las rutas hijas (Home, Productos, etc.) */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer temporal */}
      <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
        <p>Footer temporal (Tarea de Piero)</p>
      </footer>
    </div>
  );
};

export default Layout;
import React from 'react';
import { useParams } from 'react-router-dom';

// 1. Inventamos unos datos falsos (Simulando una Base de Datos)
const PRODUCTS_DB: Record<string, string[]> = {
  alimentacion: ['Leche Hacendado', 'Pan de molde', 'Huevos L', 'Arroz redondo', 'Aceite de Oliva'],
  drogueria: ['Detergente Marsella', 'Lejía con detergente', 'Suavizante Azul', 'Lavavajillas'],
  perfumeria: ['Gel de baño', 'Champú Huevo', 'Crema hidratante', 'Desodorante'],
  mascotas: ['Pienso Perro', 'Comida Gato', 'Arena absorbente'],
  bebe: ['Pañales Talla 3', 'Toallitas húmedas', 'Potitos de frutas']
};

const ProductListView = () => {
  // 2. Leemos la categoría de la URL (ej: "alimentacion")
  const { category } = useParams<{ category: string }>();

  // 3. Buscamos los productos de esa categoría (o una lista vacía si no existe)
  // Usamos el 'category' en minúsculas para buscar en nuestra "base de datos"
  const productList = category ? PRODUCTS_DB[category.toLowerCase()] : [];

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Título dinámico */}
      <h2 style={{ color: '#007a3e', textTransform: 'capitalize', marginBottom: '20px' }}>
        Categoría: {category}
      </h2>

      {/* Si hay productos, los mostramos. Si no, avisamos. */}
      {productList && productList.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {productList.map((product, index) => (
            <div key={index} style={{ 
              border: '1px solid #ddd', 
              padding: '20px', 
              borderRadius: '8px', 
              backgroundColor: 'white',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              {/* Simulamos una imagen de producto */}
              <div style={{ height: '100px', background: '#f0f0f0', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                Imagen
              </div>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>{product}</h3>
              <button style={{ 
                backgroundColor: '#007a3e', 
                color: 'white', 
                border: 'none', 
                padding: '5px 15px', 
                borderRadius: '15px',
                cursor: 'pointer' 
              }}>
                Añadir
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos para esta categoría.</p>
      )}
    </div>
  );
};

export default ProductListView;
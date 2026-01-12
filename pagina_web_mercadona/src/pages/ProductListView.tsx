import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductListView.css'; // Tu CSS actual ya sirve, solo haremos un pequeño ajuste visual

// 1. DEFINIMOS QUÉ ES UN PRODUCTO (Tipo de dato)
interface Product {
  id: number;
  name: string;
  price: number;
  unit: string; // Ej: "1 L", "Pack-6", "500g"
  img: string;
}

// 2. BASE DE DATOS MEJORADA (Objetos en lugar de strings)
const PRODUCTS_DB: Record<string, Product[]> = {
  alimentacion: [
    { id: 1, name: 'Leche Semidesnatada Hacendado', price: 0.95, unit: 'Brick 1L', img: 'https://prod-mercadona.imgix.net/images/e6f9875883088928b49372d825838634.jpg?fit=crop&h=300&w=300' },
    { id: 2, name: 'Huevos Camperos L', price: 2.30, unit: 'Docena', img: 'https://prod-mercadona.imgix.net/images/99201509b552796e6556e42b26b3495d.jpg?fit=crop&h=300&w=300' },
    { id: 3, name: 'Pan de Molde Integral', price: 1.20, unit: 'Paquete', img: 'https://prod-mercadona.imgix.net/images/569080766395914563456345.jpg?fit=crop&h=300&w=300' },
  ],
  drogueria: [
    { id: 4, name: 'Detergente Líquido Marsella', price: 3.50, unit: '3L', img: 'https://prod-mercadona.imgix.net/images/789789789.jpg?fit=crop&h=300&w=300' },
    { id: 5, name: 'Suavizante Azul', price: 1.95, unit: '2L', img: 'https://prod-mercadona.imgix.net/images/123123123.jpg?fit=crop&h=300&w=300' },
  ],
  // ... añade las otras categorías (perfumeria, mascotas, etc) siguiendo este modelo
};

const ProductListView = () => {
  const { category } = useParams<{ category: string }>();
  
  // Buscamos la lista. Si no existe la categoría, devolvemos null o array vacío.
  const productList = (category && PRODUCTS_DB[category.toLowerCase()]) || [];

  return (
    <div className="product-list-container">
      {/* Título de la categoría con primera letra mayúscula */}
      <h2 className="category-title">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Productos'}
      </h2>

      {productList.length > 0 ? (
        <div className="product-grid">
          {productList.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* IMAGEN: Ahora usamos una etiqueta img real */}
              <div className="product-image-wrapper">
                <img 
                  src={product.img} 
                  alt={product.name}
                  // Si la imagen falla (porque las URLs de ejemplo no existen), ponemos una genérica
                  onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/300?text=Producto'} 
                />
              </div>

              {/* INFORMACIÓN */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-unit">{product.unit}</span>
                
                <div className="price-row">
                  <span className="product-price">{product.price.toFixed(2)} €</span>
                  <button className="btn-add-cart">Añadir</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>🚫 No hemos encontrado productos en la categoría "{category}".</p>
          <Link to="/" style={{color: '#007a3e', fontWeight: 'bold'}}>Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default ProductListView;
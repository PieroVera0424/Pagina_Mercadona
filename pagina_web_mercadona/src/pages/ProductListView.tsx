import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductListView.css'; // ¡Importante!

// (Mantén tu constante PRODUCTS_DB igual que antes)
const PRODUCTS_DB: Record<string, string[]> = {
  alimentacion: ['Leche Hacendado', 'Pan de molde integral', 'Huevos camperos L', 'Arroz redondo', 'Aceite de Oliva Virgen'],
  drogueria: ['Detergente líquido', 'Lavavajillas a mano', 'Suavizante concentrado', 'Limpiahogar pH neutro'],
  perfumeria: ['Gel de baño dermoprotector', 'Champú familiar', 'Crema hidratante corporal', 'Desodorante roll-on'],
  mascotas: ['Pienso perro adulto', 'Comida húmeda gato', 'Arena aglomerante'],
  bebe: ['Pañales Talla 3', 'Toallitas húmedas bebé', 'Potito de frutas variadas']
};

const ProductListView = () => {
  const { category } = useParams<{ category: string }>();
  const productList = category ? PRODUCTS_DB[category.toLowerCase()] : [];

  return (
    <div className="product-list-container">
      <h2 className="category-title">
        {category ? category.replace('-', ' ') : 'Productos'}
      </h2>

      {productList && productList.length > 0 ? (
        <div className="product-grid">
          {productList.map((product, index) => (
            <div key={index} className="product-card">
              {/* Placeholder de imagen con un emoji de caja */}
              <div className="product-image-placeholder">📦</div>
              
              <h3 className="product-name">{product}</h3>
              
              <button className="btn-add-cart">
                Añadir
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>😕 No hemos encontrado productos en la categoría "{category}".</p>
          <p>Prueba a seleccionar otra del menú.</p>
        </div>
      )}
    </div>
  );
};

export default ProductListView;
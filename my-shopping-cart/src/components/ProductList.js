import React from 'react';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Producto A', price: 10 },
    { id: 2, name: 'Producto B', price: 15 },
    { id: 3, name: 'Producto C', price: 20 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio Total: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;

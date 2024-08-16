
import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.images && item.images.length > 0 ? item.images[0] : 'default-image-url.jpg'}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <p>Size: {item.selectedSize || 'N/A'}</p>
              <p>Color: {item.selectedColor || 'N/A'}</p>
              <button
                onClick={() => removeFromCart(item)}
                className="remove-from-cart"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;









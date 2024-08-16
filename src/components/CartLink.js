import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartLink.css';

const CartLink = () => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <div className="cart-link">
      <Link to="/cart">Cart</Link>
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default CartLink;

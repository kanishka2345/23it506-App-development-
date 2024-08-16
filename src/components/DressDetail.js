
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './DressDetail.css';

const SHIPPING_COST = 50; // Example shipping cost

const DressDetail = () => {
  const location = useLocation();
  const { dress } = location.state || {}; // Provide a fallback if location.state is null
  const { addToCart } = useCart(); // Use addToCart from context

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [showReturnForm, setShowReturnForm] = useState(false);
  const [returnReason, setReturnReason] = useState('');
  const [returnSubmitted, setReturnSubmitted] = useState(false);

  const [quantity, setQuantity] = useState(1); // Add state for quantity

  if (!dress) return <p>Dress not found!</p>;

  const handleAddToCart = () => {
    addToCart({ ...dress, selectedSize, selectedColor, quantity });
  };

  const handleBuyNow = () => {
    setShowPaymentForm(true);
  };

  const handleSubmitOrder = () => {
    // Handle order submission logic
    setOrderSubmitted(true);
  };

  const handleReturnProduct = () => {
    setShowReturnForm(true);
  };

  const handleSubmitReturn = () => {
    // Handle return submission logic
    setReturnSubmitted(true);
  };



  const handleRatingSubmit = (rating) => {
    setUserRating(rating);
    // Submit rating to the server or save it as needed
  };

  const totalAmount = dress.price * quantity + SHIPPING_COST;

  return (
    <div className="dress-detail">
      <div className="dress-images">
        {dress.images.map((image, index) => (
          <img key={index} src={image} alt={`${dress.name} ${index + 1}`} className="dress-image" />
        ))}
      </div>
      <div className="details">
        <h1>{dress.name}</h1>
        <p>Price: {dress.price}</p>

        <div className="selection-container">
          <label>Sizes:</label>
          <div className="selection">
            {['L', 'M', 'XL'].map((size, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`size-${size}`}
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                />
                <label htmlFor={`size-${size}`}>{size}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="selection-container">
          <label>Colors:</label>
          <div className="selection">
            {dress.colors ? dress.colors.map((color, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`color-${color}`}
                  name="color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={() => setSelectedColor(color)}
                />
                <label htmlFor={`color-${color}`}>{color}</label>
              </div>
            )) : <p>No colors available</p>}
          </div>
        </div>

        <div className="selection-container">
          <label>Quantity:</label>
          <div className="selection">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
        </div>

        <button onClick={handleAddToCart} style={{width:'25%',backgroundColor:'olive'}}className="add-to-cart">Add to Cart</button>
        <button onClick={handleBuyNow} style={{width:'25%',backgroundColor:'olive'}}className="buy-now">Buy Now</button>

        {showPaymentForm && (
          <div className="payment-form">
            <h2>Payment and Address Details</h2>
            <p><strong>Price:</strong> {dress.price}</p>
            <p><strong>Shipping Charges:</strong> Rs.{SHIPPING_COST}</p>
            {/* <p><strong>Total Amount:</strong> ₹{totalAmount}</p> */}
            <div className="payment-methods">
              <div>
                <input
                  type="radio"
                  id="gpay"
                  name="paymentMethod"
                  value="gpay"
                  checked={paymentMethod === 'gpay'}
                  onChange={() => setPaymentMethod('gpay')}
                />
                <label htmlFor="gpay">GPay</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paytm"
                  name="paymentMethod"
                  value="paytm"
                  checked={paymentMethod === 'paytm'}
                  onChange={() => setPaymentMethod('paytm')}
                />
                <label htmlFor="paytm">Paytm</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />

            <button onClick={handleSubmitOrder} className="submit-order">Submit Order</button>

            {orderSubmitted && <p className="success-message">Order successfully submitted!</p>}
          </div>
        )}

        <button onClick={handleReturnProduct}style={{width:'25%',backgroundColor:'olive'}} className="return-product">Return Product</button>

        {showReturnForm && (
          <div className="return-form">
            <h2>Return Product</h2>
            <label htmlFor="return-reason">Select a reason for return:</label>
            <select
              id="return-reason"
              value={returnReason}
              onChange={(e) => setReturnReason(e.target.value)}
            >
              <option value="">Select a reason</option>
              <option value="damaged">Damaged Product</option>
              <option value="not_as_described">Not as Described</option>
              <option value="size_issue">Size Issue</option>
              <option value="other">Other</option>
            </select>

            <button onClick={handleSubmitReturn} className="submit-return">Submit Return</button>

            {returnSubmitted && <p className="success-message">Return request successfully submitted!</p>}
          </div>
        )}

        <div className="additional-info">
          <p>100% Original Products</p>
          <p>Pay on delivery might be available</p>
          <p>Easy 7 days returns and exchanges</p>
        </div>

        <div className="rating-container">
          <h2>Rate this product:</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= (hoverRating || userRating) ? 'filled' : ''}`}
                onClick={() => handleRatingSubmit(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressDetail;





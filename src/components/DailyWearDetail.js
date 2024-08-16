
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './DailyWearDetail.css';

const DailyWearDetail = () => {
  const { state } = useLocation();
  const { image, name, price, accessories } = state || {};
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [showReturnForm, setShowReturnForm] = useState(false);
  const [returnReason, setReturnReason] = useState('');
  const [returnSubmitted, setReturnSubmitted] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const { addToCart } = useCart();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    // Creating a cart item object including the image
    const cartItem = {
      name,
      price,
      quantity,
      size,
      image, // Include the image in the cart item
    };

    // Add the item to the cart
    addToCart(cartItem);

    alert(`Added ${quantity} ${name} of size ${size} to the cart`);
  };

  const handleBuyNow = () => {
    setShowPaymentForm(true);
  };

  const handleSubmitOrder = () => {
    setOrderSubmitted(true);
    alert(`Order submitted successfully for ${quantity} ${name} (Size: ${size}) with payment method ${paymentMethod}`);
    setShowPaymentForm(false);
    setPaymentMethod('');
    setAddress('');
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitRating = () => {
    setRatingSubmitted(true);
    alert(`Rating of ${rating} stars submitted for ${name}`);
  };

  const handleReturnProduct = () => {
    setShowReturnForm(true);
  };

  const handleReturnReasonChange = (e) => {
    setReturnReason(e.target.value);
  };

  const handleSubmitReturn = () => {
    if (returnReason) {
      setReturnSubmitted(true);
      alert(`Return reason submitted: ${returnReason}`);
      setReturnReason('');
      setShowReturnForm(false);
    } else {
      alert('Please select a reason for returning the product.');
    }
  };

  return (
    <div className="dailywear-detail">
      <div className="image-container">
        <img src={image} alt={name} className="detail-image" />
      </div>
      <div className="details">
        <h1>{name}</h1>
        <p className="price">{price}</p>
        <div className="size">
          <label htmlFor="size">Size:</label>
          <select id="size" value={size} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
        </div>
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <div className="actions">
          <button onClick={handleAddToCart}style={{width:'25%',backgroundColor:'olive'}}>Add to Cart</button>
          <button onClick={handleBuyNow}style={{width:'25%',backgroundColor:'olive'}}>Buy Now</button>
          <button onClick={handleReturnProduct}style={{width:'25%',backgroundColor:'olive'}}>Return Product</button>
        </div>

        {/* Rating Section */}
        <div className="rating-section">
          <h2>Rate this Product</h2>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`star ${star <= rating ? 'selected' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <button onClick={handleSubmitRating}style={{width:'25%',backgroundColor:'olive'}} disabled={ratingSubmitted}>
            {ratingSubmitted ? 'Rating Submitted' : 'Submit Rating'}
          </button>
        </div>

        {showPaymentForm && (
          <div className="payment-form">
            <h2>Payment and Address Details</h2>
            <p><strong>Price:</strong> {price}</p>
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

            <button onClick={handleSubmitOrder} className="submit-order">
              Submit Order
            </button>

            {orderSubmitted && <p className="success-message">Order successfully submitted!</p>}
          </div>
        )}

        {showReturnForm && (
          <div className="return-form">
            <h2>Return Product</h2>
            <p>Select a reason for returning the product:</p>
            <div className="return-reasons">
              <label>
                <input
                  type="checkbox"
                  value="Defective product"
                  onChange={handleReturnReasonChange}
                />
                Defective product
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Wrong item sent"
                  onChange={handleReturnReasonChange}
                />
                Wrong item sent
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Item not as described"
                  onChange={handleReturnReasonChange}
                />
                Item not as described
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  onChange={handleReturnReasonChange}
                />
                Other
              </label>
            </div>
            <button onClick={handleSubmitReturn} disabled={returnSubmitted}>
              {returnSubmitted ? 'Return Submitted' : 'Submit Return'}
            </button>
          </div>
        )}

        <div className="info">
          <h3>Product Details:</h3>
          <ul>
            <li>100% Original Products</li>
            <li>Pay on delivery might be available</li>
            <li>Easy 7 days returns and exchanges</li>
          </ul>
        </div>

        {accessories && accessories.length > 0 && (
          <div className="accessories-section">
            <h2>Recommended Accessories</h2>
            <div className="accessories-grid">
              {accessories.map((accessory, index) => (
                <div className="accessory-item" key={index}>
                  <img src={accessory.image} alt={`Accessory ${index + 1}`} className="accessory-image" />
                  <p>{accessory.name}</p>
                  <p>{accessory.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyWearDetail;



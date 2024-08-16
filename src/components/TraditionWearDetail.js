

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import './TraditionWearDetail.css';

// const TraditionWearDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;
//   const { addToCart } = useCart(); // Integrate cart functionality

//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState('');
//   const [rating, setRating] = useState(0);
//   const [ratingSubmitted, setRatingSubmitted] = useState(false);
//   const [showReturnForm, setShowReturnForm] = useState(false);
//   const [returnReason, setReturnReason] = useState('');
//   const [returnSubmitted, setReturnSubmitted] = useState(false);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [address, setAddress] = useState('');
//   const [orderSubmitted, setOrderSubmitted] = useState(false);

//   if (!state) {
//     return <h1>No details available</h1>;
//   }

//   const { image, name, price, accessories } = state;

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleSizeChange = (e) => {
//     setSize(e.target.value);
//   };

//   const handleAddToCart = () => {
//     const item = {
//       name,
//       price,
//       image, // Ensure this is a valid URL or path
//       quantity,
//       size,
//     };
//     addToCart(item); // addToCart should be from your CartContext
//     alert(`Added ${quantity} ${name} of size ${size} to the cart`);
//   };

//   const handleBuyNow = () => {
//     setShowPaymentForm(true);
//   };

//   const handleSubmitOrder = () => {
//     setOrderSubmitted(true);
//     alert(`Order submitted successfully for ${quantity} ${name} (Size: ${size}) with payment method ${paymentMethod}`);
//     setShowPaymentForm(false);
//     setPaymentMethod('');
//     setAddress('');
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleSubmitRating = () => {
//     setRatingSubmitted(true);
//     alert(`Rating of ${rating} stars submitted for ${name}`);
//   };

//   const handleReturnProduct = () => {
//     setShowReturnForm(true);
//   };

//   const handleReturnReasonChange = (e) => {
//     setReturnReason(e.target.value);
//   };

//   const handleSubmitReturn = () => {
//     if (returnReason) {
//       setReturnSubmitted(true);
//       alert(`Return reason submitted: ${returnReason}`);
//       setReturnReason('');
//       setShowReturnForm(false);
//     } else {
//       alert('Please select a reason for returning the product.');
//     }
//   };

//   return (
//     <div className="traditionwear-detail">
//       <div className="image-container">
//         <img src={image} alt={name} className="detail-image" />
//       </div>
//       <div className="details">
//         <h1>{name}</h1>
//         <p className="price">{price}</p>
//         <div className="size">
//           <label htmlFor="size">Size:</label>
//           <select id="size" value={size} onChange={handleSizeChange}>
//             <option value="">Select Size</option>
//             <option value="S">Small</option>
//             <option value="M">Medium</option>
//             <option value="L">Large</option>
//             <option value="XL">X-Large</option>
//           </select>
//         </div>
//         <div className="quantity">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             onChange={handleQuantityChange}
//             min="1"
//           />
//         </div>
//         <div className="actions">
//           <button onClick={handleAddToCart}>Add to Cart</button>
//           <button onClick={handleBuyNow}>Buy Now</button>
//           <button onClick={handleReturnProduct}>Return Product</button>
//         </div>

//         {showPaymentForm && (
//           <div className="payment-form">
//             <h2>Payment and Address Details</h2>
//             <p><strong>Price:</strong> {price}</p>
//             <div className="payment-methods">
//               <label>
//                 <input
//                   type="radio"
//                   id="gpay"
//                   name="paymentMethod"
//                   value="gpay"
//                   checked={paymentMethod === 'gpay'}
//                   onChange={() => setPaymentMethod('gpay')}
//                 />
//                 GPay
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="paytm"
//                   name="paymentMethod"
//                   value="paytm"
//                   checked={paymentMethod === 'paytm'}
//                   onChange={() => setPaymentMethod('paytm')}
//                 />
//                 Paytm
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="cod"
//                   name="paymentMethod"
//                   value="cod"
//                   checked={paymentMethod === 'cod'}
//                   onChange={() => setPaymentMethod('cod')}
//                 />
//                 Cash on Delivery
//               </label>
//             </div>

//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter your address"
//             />

//             <button onClick={handleSubmitOrder} className="submit-order">
//               Submit Order
//             </button>

//             {orderSubmitted && <p className="success-message">Order successfully submitted!</p>}
//           </div>
//         )}

//         {showReturnForm && (
//           <div className="return-form">
//             <h2>Return Product</h2>
//             <p>Select a reason for returning the product:</p>
//             <div className="return-reasons">
//               <label>
//                 <input
//                   type="checkbox"
//                   value="Defective product"
//                   onChange={handleReturnReasonChange}
//                 />
//                 Defective product
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="Wrong item sent"
//                   onChange={handleReturnReasonChange}
//                 />
//                 Wrong item sent
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="Item not as described"
//                   onChange={handleReturnReasonChange}
//                 />
//                 Item not as described
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="Other"
//                   onChange={handleReturnReasonChange}
//                 />
//                 Other
//               </label>
//             </div>
//             <button onClick={handleSubmitReturn} disabled={returnSubmitted}>
//               {returnSubmitted ? 'Return Submitted' : 'Submit Return'}
//             </button>
//           </div>
//         )}

//         <div className="info">
//           <h3>Product Details:</h3>
//           <ul>
//             <li>100% Original Products</li>
//             <li>Pay on delivery might be available</li>
//             <li>Easy 7 days returns and exchanges</li>
//           </ul>
//         </div>

//         <div className="accessories">
//           <h3>Accessories</h3>
//           <div className="accessory-list">
//             {accessories.map((accessory) => (
//               <div key={accessory} className="accessory-item">
//                 <img src={accessory} alt={`Accessory ${accessory}`} className="accessory-image" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TraditionWearDetail;




import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './TraditionWearDetail.css';

const TraditionWearDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { addToCart } = useCart(); // Integrate cart functionality

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

  if (!state) {
    return <h1>No details available</h1>;
  }

  const { image, name, price, accessories } = state;

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    const item = {
      name,
      price,
      image, // Ensure this is a valid URL or path
      quantity,
      size,
    };
    addToCart(item); // addToCart should be from your CartContext
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

  // Function to render star ratings
  const renderStars = (currentRating) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= currentRating ? 'filled' : ''}`}
            onClick={() => handleRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="traditionwear-detail">
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

        {showPaymentForm && (
          <div className="payment-form">
            <h2>Payment and Address Details</h2>
            <p><strong>Price:</strong> {price}</p>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  id="gpay"
                  name="paymentMethod"
                  value="gpay"
                  checked={paymentMethod === 'gpay'}
                  onChange={() => setPaymentMethod('gpay')}
                />
                GPay
              </label>
              <label>
                <input
                  type="radio"
                  id="paytm"
                  name="paymentMethod"
                  value="paytm"
                  checked={paymentMethod === 'paytm'}
                  onChange={() => setPaymentMethod('paytm')}
                />
                Paytm
              </label>
              <label>
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                Cash on Delivery
              </label>
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

        <div className="accessories">
          <h3>Accessories</h3>
          <div className="accessory-list">
            {accessories.map((accessory) => (
              <div key={accessory} className="accessory-item">
                <img src={accessory} alt={`Accessory ${accessory}`} className="accessory-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="rating">
          <h3>Rate this Product:</h3>
          {renderStars(rating)}
          <button onClick={handleSubmitRating}style={{width:'25%',backgroundColor:'olive'}} disabled={ratingSubmitted}>
            {ratingSubmitted ? 'Rating Submitted' : 'Submit Rating'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraditionWearDetail;




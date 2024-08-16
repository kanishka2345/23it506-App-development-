
// // src/components/AccessoryDetail.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './AccessoryDetail.css'; // Import CSS for AccessoryDetail

// const AccessoryDetail = () => {
//   const { state } = useLocation();
//   const { image, name, price } = state || {};
//   const [quantity, setQuantity] = useState(1);
//   const [rating, setRating] = useState(0); // For rating
//   const [ratingSubmitted, setRatingSubmitted] = useState(false); // To track if rating is submitted
//   const [showReturnForm, setShowReturnForm] = useState(false); // To show return form
//   const [returnReason, setReturnReason] = useState('');
//   const [returnSubmitted, setReturnSubmitted] = useState(false); // To track if return reason is submitted
//   const [showPaymentForm, setShowPaymentForm] = useState(false); // To show payment form
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [address, setAddress] = useState('');
//   const [orderSubmitted, setOrderSubmitted] = useState(false);

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleAddToCart = () => {
//     // Logic to add the item to the cart
//     alert(`Added ${quantity} ${name} to the cart`);
//   };

//   const handleBuyNow = () => {
//     setShowPaymentForm(true);
//   };

//   const handleSubmitOrder = () => {
//     // Handle order submission logic
//     setOrderSubmitted(true);
//     alert(`Order submitted successfully for ${quantity} ${name} with payment method ${paymentMethod}`);
//     // Reset states or redirect user as needed
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
//     <div className="accessory-detail">
//       <div className="image-container">
//         <img src={image} alt={name} className="detail-image" />
//       </div>
//       <div className="details">
//         <h1>{name}</h1>
//         <p className="price">{price}</p>
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
//               <div>
//                 <input
//                   type="radio"
//                   id="gpay"
//                   name="paymentMethod"
//                   value="gpay"
//                   checked={paymentMethod === 'gpay'}
//                   onChange={() => setPaymentMethod('gpay')}
//                 />
//                 <label htmlFor="gpay">GPay</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="paytm"
//                   name="paymentMethod"
//                   value="paytm"
//                   checked={paymentMethod === 'paytm'}
//                   onChange={() => setPaymentMethod('paytm')}
//                 />
//                 <label htmlFor="paytm">Paytm</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="cod"
//                   name="paymentMethod"
//                   value="cod"
//                   checked={paymentMethod === 'cod'}
//                   onChange={() => setPaymentMethod('cod')}
//                 />
//                 <label htmlFor="cod">Cash on Delivery</label>
//               </div>
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
//       </div>
//     </div>
//   );
// };

// export default AccessoryDetail;






import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AccessoryDetail.css'; // Import CSS for AccessoryDetail

const AccessoryDetail = () => {
  const { state } = useLocation();
  const { image, name, price } = state || {};
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [showReturnForm, setShowReturnForm] = useState(false);
  const [returnReason, setReturnReason] = useState('');
  const [returnSubmitted, setReturnSubmitted] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${name} to the cart`);
  };

  const handleBuyNow = () => {
    setShowPaymentForm(true);
  };

  const handleSubmitOrder = () => {
    setOrderSubmitted(true);
    alert(`Order submitted successfully for ${quantity} ${name} with payment method ${paymentMethod}`);
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
    <div className="accessory-detail">
      <div className="image-container">
        <img src={image} alt={name} className="detail-image" />
      </div>
      <div className="details">
        <h1>{name}</h1>
        <p className="price">{price}</p>
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
          <button onClick={handleAddToCart} style={{width:'25%',backgroundColor:'olive'}}>Add to Cart</button>
          <button onClick={handleBuyNow}style={{width:'25%',backgroundColor:'blueviolet'}}>Buy Now</button>
          <button onClick={handleReturnProduct}style={{width:'25%'}}>Return Product</button>
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

            <button onClick={handleSubmitOrder}  className="submit-order">
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
            <button onClick={handleSubmitReturn} disabled={returnSubmitted} style={{width:'25%'}} >
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
      </div>
    </div>
  );
};

export default AccessoryDetail;


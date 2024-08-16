
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import SignIn from './components/SignIn';
// import Register from './components/Register';
// import DressPage from './components/DressPage';
// import DressDetail from './components/DressDetail';
// import AccessoriesPage from './components/AccessoriesPage';
// import AccessoryDetail from './components/AccessoryDetail';
// import DailyWearPage from './components/DailyWearPage';
// import DailyWearDetail from './components/DailyWearDetail'; // Import DailyWearDetail component
// import Cart from './components/Cart';
// import CartLink from './components/CartLink';
// import TraditionWearPage from './components/TraditionWearPage'; // Import TraditionWearPage component
// import TraditionWearDetail from './components/TraditionWearDetail'; // Import TraditionWearDetail component
// import MatchingWearsPage from './components/MatchingWearsPage'; // Import MatchingWearsPage component
// import MatchingWearDetailPage from './components/MatchingWearDetailPage'; // Import MatchingWearDetailPage component
// import { CartProvider } from './contexts/CartContext';
// import './App.css';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div>
//           <nav className="navbar">
//             <Link to="/">Home</Link>
//             <Link to="/signin">Sign In</Link>
//             <Link to="/register">Register</Link>
//             <div className="dropdown">
//               <button className="dropbtn">Shop</button>
//               <div className="dropdown-content">
//                 <Link to="/dresses">Dresses</Link>
//                 <Link to="/accessories">Accessories</Link>
//                 <Link to="/dailywear">Daily Wear</Link>
//                 <Link to="/traditionwear">Traditional Wear</Link>
//                 <Link to="/matchingwears">Matching Wears</Link>
//               </div>
//             </div>
//             <CartLink />
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dresses" element={<DressPage />} />
//             <Route path="/dress/:id" element={<DressDetail />} />
//             <Route path="/accessories" element={<AccessoriesPage />} />
//             <Route path="/accessory/:id" element={<AccessoryDetail />} />
//             <Route path="/dailywear" element={<DailyWearPage />} />
//             <Route path="/dailywear/:id" element={<DailyWearDetail />} />
//             <Route path="/traditionwear" element={<TraditionWearPage />} />
//             <Route path="/traditionwear/:id" element={<TraditionWearDetail />} />
//             <Route path="/matchingwears" element={<MatchingWearsPage />} />
//             <Route path="/matchingwears/:id" element={<MatchingWearDetailPage />} /> {/* Add MatchingWearDetailPage route */}
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import SignIn from './components/SignIn';
// import Register from './components/Register';
// import DressPage from './components/DressPage';
// import DressDetail from './components/DressDetail';
// import AccessoriesPage from './components/AccessoriesPage';
// import AccessoryDetail from './components/AccessoryDetail';
// import DailyWearPage from './components/DailyWearPage';
// import DailyWearDetail from './components/DailyWearDetail'; // Import DailyWearDetail component
// import Cart from './components/Cart';
// import CartLink from './components/CartLink';
// import TraditionWearPage from './components/TraditionWearPage'; // Import TraditionWearPage component
// import TraditionWearDetail from './components/TraditionWearDetail'; // Import TraditionWearDetail component
// import MatchingWearsPage from './components/MatchingWearsPage'; // Import MatchingWearsPage component
// import MatchingWearDetailPage from './components/MatchingWearDetailPage'; // Import MatchingWearDetailPage component
// import { CartProvider } from './contexts/CartContext';
// import './App.css';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div>
//           <nav className="navbar">
//             <Link to="/">Home</Link>
//             <Link to="/signin">Sign In</Link>
//             <Link to="/register">Register</Link>
//             <div className="dropdown">
//               <button className="dropbtn">Shop</button>
//               <div className="dropdown-content">
//                 <Link to="/dresses">Dresses</Link>
//                 <Link to="/accessories">Accessories</Link>
//                 <Link to="/dailywear">Daily Wear</Link>
//                 <Link to="/traditionwear">Traditional Wear</Link>
//                 <Link to="/matchingwears">Matching Wears</Link>
//               </div>
//             </div>
//             <CartLink />
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dresses" element={<DressPage />} />
//             <Route path="/dress/:id" element={<DressDetail />} />
//             <Route path="/accessories" element={<AccessoriesPage />} />
//             <Route path="/accessory/:id" element={<AccessoryDetail />} />
//             <Route path="/dailywear" element={<DailyWearPage />} />
//             <Route path="/dailywear/:id" element={<DailyWearDetail />} />
//             <Route path="/traditionwear" element={<TraditionWearPage />} />
//             <Route path="/traditionwear/:id" element={<TraditionWearDetail />} />
//             <Route path="/matchingwears" element={<MatchingWearsPage />} />
//             <Route path="/matchingwears/:id" element={<MatchingWearDetailPage />} /> {/* Add MatchingWearDetailPage route */}
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from './components/Register';
import DressPage from './components/DressPage';
import DressDetail from './components/DressDetail';
import AccessoriesPage from './components/AccessoriesPage';
import AccessoryDetail from './components/AccessoryDetail';
import DailyWearPage from './components/DailyWearPage';
import DailyWearDetail from './components/DailyWearDetail';
import Cart from './components/Cart';
import CartLink from './components/CartLink';
import TraditionWearPage from './components/TraditionWearPage';
import TraditionWearDetail from './components/TraditionWearDetail';
import MatchingWearsPage from './components/MatchingWearsPage';
import MatchingWearDetailPage from './components/MatchingWearDetailPage';
import WishlistPage from './components/WishlistPage'; // Import WishlistPage component
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div>
            <nav className="navbar">
              <Link to="/">Home</Link>
              <Link to="/signin">Sign In</Link>
              <Link to="/register">Register</Link>
              <div className="dropdown">
                <button className="dropbtn">Shop</button>
                <div className="dropdown-content">
                  <Link to="/dresses">Dresses</Link>
                  <Link to="/accessories">Accessories</Link>
                  <Link to="/dailywear">Daily Wear</Link>
                  <Link to="/traditionwear">Traditional Wear</Link>
                  <Link to="/matchingwears">Matching Wears</Link>
                </div>
              </div>
              {/* <Link to="/wishlist">
                <img src="path/to/wishlist-icon.png" alt="Wishlist" />
              </Link> */}
              <CartLink />
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dresses" element={<DressPage />} />
              <Route path="/dress/:id" element={<DressDetail />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/accessory/:id" element={<AccessoryDetail />} />
              <Route path="/dailywear" element={<DailyWearPage />} />
              <Route path="/dailywear/:id" element={<DailyWearDetail />} />
              <Route path="/traditionwear" element={<TraditionWearPage />} />
              <Route path="/traditionwear/:id" element={<TraditionWearDetail />} />
              <Route path="/matchingwears" element={<MatchingWearsPage />} />
              <Route path="/matchingwears/:id" element={<MatchingWearDetailPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<WishlistPage />} /> {/* Add WishlistPage route */}
            </Routes>
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

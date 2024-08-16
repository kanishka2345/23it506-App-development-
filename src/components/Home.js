

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


import { useWishlist } from '../contexts/WishlistContext';
import './Home.css';

const images = {
  dress1: [
    "https://images.unsplash.com/photo-1495994132590-5c7b6c4fffec?w=400&auto=format&fit=crop&q=60",
    "https://www.shahifits.in/wp-content/uploads/2022/10/Glitter-Saree-Party-Wear-Ink-Blue-Colour-1-e1667211177108-768x1019.jpg",
    "https://i.pinimg.com/736x/17/4c/76/174c767a9eae5677cebce2fa59bf1fc6.jpg",
    "https://c1.wallpaperflare.com/preview/494/65/156/jewellery-golden-gold-jewelry.jpg"
  ],
  dress2: [
    "https://i.pinimg.com/736x/b4/0e/fd/b40efd5495497a00a92b7048bbd694c7.jpg",
    "https://i.pinimg.com/736x/f9/f5/94/f9f594ce108ae0e81fdb56cc78ebc600.jpg",
    "https://idaho-o.com/wp-content/uploads/2022/11/IMG_1146.jpg",
    "https://w0.peakpx.com/wallpaper/98/789/HD-wallpaper-ring-stone-saphire-jewel-white-topaz-blue.jpg"
  ],
  accessory1: [
    "https://i.pinimg.com/originals/09/60/02/0960021934c89e1608cb217895084395.jpg",
    "https://san-bro.com/wp-content/uploads/2020/05/Beautiful-Elegant-Silver-Bracelet-Chain-Bracelet-Bangle-For-Women-Lady-Fashion-Jewelry.jpg",
    "https://i.pinimg.com/736x/a2/b0/32/a2b0324fcb0d070839994f64dcf3492e.jpg",
    "https://i.etsystatic.com/16963724/r/il/218088/2857836665/il_1588xN.2857836665_ibe4.jpg"
  ],
  accessory2: [
    "https://www.southjewellery.com/wp-content/uploads/2020/04/diamond-emerald-bangles-scaled-e1585932575233.jpg",
    "https://i.pinimg.com/originals/64/af/8e/64af8eab1b86efe719579f2ceb078407.jpg",
    "https://wallpapercave.com/wp/wp7594089.jpg",
    "https://wallpapercave.com/wp/wp1890366.jpg"
  ]
};

const newImages = [
  "https://pinklily.com/cdn/shop/files/219A3494.jpg?crop=center&height=100&v=1721999024&width=100",
  "https://pinklily.com/cdn/shop/files/201484_FreshwaterPearlLayeringNecklace_1.jpg?crop=center&height=100&v=1711391289&width=100",
  "https://pinklily.com/cdn/shop/files/july_clearance-collection_page.jpg?crop=center&height=100&v=1722008874&width=100",
  "https://pinklily.com/cdn/shop/files/219A0025_88e633ac-a0a7-4a6b-8a59-350a6d8db40f.jpg?crop=center&height=100&v=1721323854&width=100",
  "https://pinklily.com/cdn/shop/files/219A8096.jpg?crop=center&height=100&v=1722285028&width=100",
  "https://tse2.mm.bing.net/th?id=OIP.gQicAxXnzmf5nquscowq_gHaJf&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.DTULzkL3qBCchTCvT52ecAHaKf&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.-I77SiCDumtMpU02BX7qrgHaEK&pid=Api&P=0&h=180"
];

const slideshowImages = [
  "https://blog.feedspot.com/wp-content/uploads/2017/04/Women-Fashion-Blogs.jpg",
  "https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg",
  "http://4.bp.blogspot.com/-CkerHiixlNA/TckqOBF80fI/AAAAAAAAAIk/7BQC0j0q0Yo/s1600/top_fashion_modles_1440ST_7019.jpg"
];

const Home = () => {
  const [imageIndices, setImageIndices] = useState({
    dress1: 0,
    dress2: 0,
    accessory1: 0,
    accessory2: 0
  });
  const [hasSpoken, setHasSpoken] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (!hasSpoken) {
      const welcomeMessage = "Welcome to LadyBoss Dress and Accessories Shop. Explore our latest collections and enjoy shopping!";
      const synth = window.speechSynthesis;

      if (synth) {
        const utterThis = new SpeechSynthesisUtterance(welcomeMessage);
        utterThis.onend = () => {
          setHasSpoken(true);
        };
        synth.speak(utterThis);
      }
    }

    const intervals = Object.keys(imageIndices).map(category =>
      setInterval(() => {
        setImageIndices(prevIndices => ({
          ...prevIndices,
          [category]: (prevIndices[category] + 1) % images[category].length
        }));
      }, 4000)
    );

    const slideshowInterval = setInterval(() => {
      setSlideshowIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
    }, 3000); // Change slideshow interval to 3 seconds

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(slideshowInterval);
    };
  }, [hasSpoken, imageIndices]);

  const handleImageClick = () => {
    alert('Please sign in to view our shop.');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      const filteredSuggestions = [
        { name: 'Casual Dress', path: '/dresses/casual' },
        { name: 'Summer Dress', path: '/dresses/summer' },
        { name: 'Evening Dress', path: '/dresses/evening' },
        { name: 'Formal Wear', path: '/dresses/formal' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Daily Wear', path: '/dailywear' },
        { name: 'Traditional Wear', path: '/traditionalwear' }
      ].filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Define the redirection paths
    const redirectionPaths = {
      'dresses': '/dresses',
      'accessories': '/accessories',
      'daily wear': '/dailywear',
      'traditional wear': '/traditionalwear'
    };

    // Redirect based on search query
    const redirectPath = Object.keys(redirectionPaths).find(key =>
      searchQuery.toLowerCase().includes(key)
    );

    if (redirectPath) {
      navigate(redirectionPaths[redirectPath]);
    } else {
      alert(`No results found for: ${searchQuery}`);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <div className="home-container">
      <header className="header">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.M8ieoHbCyVQeuAKVq41MkgHaEx&pid=Api&P=0&h=180.png"
          alt="Dress Logo"
          className="logo"
        />
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
            {suggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(item.path)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </header>
      <h1>Welcome to LadyBoss Dress and Accessories Shop</h1>
      <div className="gallery">
        {Object.keys(images).map((category, idx) => (
          <div key={idx} className="gallery-item" onClick={handleImageClick}>
            <img
              src={images[category][imageIndices[category]]}
              alt={category}
            />
          </div>
        ))}
      </div>

      {/* New Section for Circular Images */}
      <div className="new-images-section">
        {newImages.map((img, idx) => (
          <div key={idx} className="new-image-item">
            <img src={img} alt={`new${idx}`} />
          </div>
        ))}
      </div>

      {/* Slideshow Section */}
      <div className="slideshow-container">
        <img
          src={slideshowImages[slideshowIndex]}
          alt={`slideshow${slideshowIndex}`}
          className="slideshow-image"
        />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://wa.me/917695984432" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
          <div className="footer-info">
            <div className="about-us">
              <h3>About Us</h3>
              <p>We are LadyBoss, a premier destination for high-quality dresses and accessories. Our mission is to provide stylish and fashionable options for every occasion.</p>
            </div>
            <div className="contact-details">
              <h3>Contact Us</h3>
              <p>Email: support@ladyboss.com</p>
              <p>Phone: 7695984432</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;




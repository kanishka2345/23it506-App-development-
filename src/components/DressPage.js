
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DressPage.css';

const DressPage = () => {
  const navigate = useNavigate();
  const [crackEffect, setCrackEffect] = useState(null);
  const [wishlist, setWishlist] = useState([])
   

  // Example dress data with multiple images
  const dresses = [
    { 
      id: '1', 
      images: [
        'https://i.pinimg.com/originals/c1/4e/30/c14e301e5aa4af4f33d5d2b8f3c01ee7.jpg', 
        'https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbf6380eb/images/hi-res/19173_1.jpg?sw=2000&sh=2000&sm=fit'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1066',
      
      
    },
    { 
      id: '2', 
      images: [
        'https://i.pinimg.com/736x/06/8a/88/068a8859b81bfd5e0eabf07d087b43e8.jpg', 
        'https://i.pinimg.com/originals/88/81/e4/8881e40e73040b3e4cfa334401b6705e.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1266'
    },
    { 
      id: '3', 
      images: [
        'https://wallpapercave.com/wp/wp7729903.jpg', 
        'https://blog.southindiajewels.com/wp-content/uploads/2020/07/necklace-for-saree-online-14.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.700'
    },
    { 
      id: '4', 
      images: [
        'https://e7.pngegg.com/pngimages/272/26/png-clipart-women-s-blue-and-orange-tank-maxi-dress-anarkali-salwar-suit-dress-shalwar-kameez-georgette-dress-fashion-kurta.png', 
        'https://getwallpapers.com/wallpaper/full/5/8/3/1173168-wedding-ring-wallpaper-1920x1080-for-ipad-2.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1250'
    },
    { 
      id: '5', 
      images: [
        'https://i.pinimg.com/736x/e2/10/0d/e2100d8a399b597319d20c7eddf4c520.jpg', 
        'https://sanideas.com/wp-content/uploads/2020/06/blue-bangles-56484.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.699'
    },
    { 
      id: '6', 
      images: [
        'https://i.pinimg.com/736x/d8/52/f0/d852f0326d9d5cf648cd687e7127e7df.jpg', 
        'https://sites.create-cdn.net/siteimages/22/6/8/226895/19/7/1/19719010/1000x1000.jpg?1639407783'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1500'
    },
    { 
      id: '7', 
      images: [
        'https://natalet.com/images5/0817L/full-frocks-for-ladies/full-frocks-for-ladies-68_4.jpg', 
        'https://5.imimg.com/data5/SELLER/Default/2022/8/YU/FC/ZC/4935373/18-wineredhairclip-500x500.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1750'
    },
    { 
      id: '8', 
      images: [
        'https://i.pinimg.com/736x/a9/06/49/a90649ad0d78cd1098c99f8b71aaeaca.jpg', 
        'https://img1.etsystatic.com/174/0/13425496/il_fullxfull.1164692147_5uyf.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.999'
    },
    { 
      id: '9', 
      images: [
        'https://wallpapercave.com/wp/wp7729929.jpg', 
        'http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/6a/c0/6ac0955e-a066-4999-9a55-beb3e5bad056/mouawad_incomparable_diamond_necklace.jpg__1080x0_q75_crop-scale_subsampling-2_upscale-false.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.1555'
    },
    { 
      id: '10', 
      images: [
        'https://wallpapercave.com/wp/wp7599014.jpg', 
        'http://2.bp.blogspot.com/-C5B-EAB36GI/UsbfUG__AvI/AAAAAAAAGAs/6fajUB26tEI/s1600/diaomnd+necklace.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.2050'
    },
    { 
      id: '11', 
      images: [
        'https://i.pinimg.com/originals/3f/55/4c/3f554c69d54675aa96a137cf635d1e97.jpg', 
        'https://5.imimg.com/data5/SELLER/Default/2022/11/LO/RX/YF/87259759/np0004-500x500.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.949'
    },
    { 
      id: '12', 
      images: [
        'https://getethnic.com/wp-content/uploads/2020/03/Golden-Bridal-Lehenga-15.jpg', 
        'https://i.pinimg.com/originals/b6/6a/1c/b66a1cc8da702729f656b5e61d131045.jpg'
      ], 
      name: 'Grand Wear', 
      price: 'Rs.4500'
    },
  ];

//   const handleBuyNow = (dress) => {
//     setCrackEffect(dress.id);
//     setTimeout(() => {
//       navigate(`/dress/${dress.id}`, { state: { dress } });
//     }, 1000); // Adjust this duration to match your animation duration
//   };

//   return (
//     <div className="dress-page">
//       {dresses.map(dress => (
//         <div key={dress.id} className={`dress-item ${crackEffect === dress.id ? 'crack-effect' : ''}`}>
//           <h2>{dress.name}</h2>
//           <p>{dress.price}</p>
//           <div className="dress-images">
//             {dress.images.map((image, index) => (
//               <img key={index} src={image} alt={`${dress.name} ${index + 1}`} className="dress-image" />
//             ))}
//           </div>
//           <button onClick={() => handleBuyNow(dress)} className="buy-now">Buy Now</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DressPage;





const handleBuyNow = (dress) => {
  setCrackEffect(dress.id);
  setTimeout(() => {
    navigate(`/dress/${dress.id}`, { state: { dress } });
  }, 1000); // Adjust this duration to match your animation duration
};

const handleAddToWishlist = (dress) => {
  setWishlist((prevWishlist) => [...prevWishlist, dress]);
};

return (
  <div className="dress-page">
    <div className="wishlist-icon" onClick={() => console.log('Wishlist clicked')}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
    {dresses.map(dress => (
      <div key={dress.id} className={`dress-item ${crackEffect === dress.id ? 'crack-effect' : ''}`}>
        <h2>{dress.name}</h2>
        <p>{dress.price}</p>
        <div className="dress-images">
          {dress.images.map((image, index) => (
            <img key={index} src={image} alt={`${dress.name} ${index + 1}`} className="dress-image" />
          ))}
        </div>
        <button onClick={() => handleBuyNow(dress)} className="buy-now">Buy Now</button>
        <button onClick={() => handleAddToWishlist(dress)} className="wishlist-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
    ))}
  </div>
);
};

export default DressPage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './DressPage.css';

// const DressPage = () => {
//   const navigate = useNavigate();
//   const [crackEffect, setCrackEffect] = useState(null);
//   const [wishlist, setWishlist] = useState([]);

//   // Example dress data with multiple images
//   const dresses = [
//     { 
//       id: '1', 
//       images: [
//         'https://i.pinimg.com/originals/c1/4e/30/c14e301e5aa4af4f33d5d2b8f3c01ee7.jpg', 
//         'https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbf6380eb/images/hi-res/19173_1.jpg?sw=2000&sh=2000&sm=fit'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1066',
//     },
//     { 
//       id: '2', 
//       images: [
//         'https://i.pinimg.com/736x/06/8a/88/068a8859b81bfd5e0eabf07d087b43e8.jpg', 
//         'https://i.pinimg.com/originals/88/81/e4/8881e40e73040b3e4cfa334401b6705e.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1266'
//     },
//     { 
//       id: '3', 
//       images: [
//         'https://wallpapercave.com/wp/wp7729903.jpg', 
//         'https://blog.southindiajewels.com/wp-content/uploads/2020/07/necklace-for-saree-online-14.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.700'
//     },
//     { 
//       id: '4', 
//       images: [
//         'https://e7.pngegg.com/pngimages/272/26/png-clipart-women-s-blue-and-orange-tank-maxi-dress-anarkali-salwar-suit-dress-shalwar-kameez-georgette-dress-fashion-kurta.png', 
//         'https://getwallpapers.com/wallpaper/full/5/8/3/1173168-wedding-ring-wallpaper-1920x1080-for-ipad-2.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1250'
//     },
//     { 
//       id: '5', 
//       images: [
//         'https://i.pinimg.com/736x/e2/10/0d/e2100d8a399b597319d20c7eddf4c520.jpg', 
//         'https://sanideas.com/wp-content/uploads/2020/06/blue-bangles-56484.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.699'
//     },
//     { 
//       id: '6', 
//       images: [
//         'https://i.pinimg.com/736x/d8/52/f0/d852f0326d9d5cf648cd687e7127e7df.jpg', 
//         'https://sites.create-cdn.net/siteimages/22/6/8/226895/19/7/1/19719010/1000x1000.jpg?1639407783'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1500'
//     },
//     { 
//       id: '7', 
//       images: [
//         'https://natalet.com/images5/0817L/full-frocks-for-ladies/full-frocks-for-ladies-68_4.jpg', 
//         'https://5.imimg.com/data5/SELLER/Default/2022/8/YU/FC/ZC/4935373/18-wineredhairclip-500x500.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1750'
//     },
//     { 
//       id: '8', 
//       images: [
//         'https://i.pinimg.com/736x/a9/06/49/a90649ad0d78cd1098c99f8b71aaeaca.jpg', 
//         'https://img1.etsystatic.com/174/0/13425496/il_fullxfull.1164692147_5uyf.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.999'
//     },
//     { 
//       id: '9', 
//       images: [
//         'https://wallpapercave.com/wp/wp7729929.jpg', 
//         'http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/6a/c0/6ac0955e-a066-4999-9a55-beb3e5bad056/mouawad_incomparable_diamond_necklace.jpg__1080x0_q75_crop-scale_subsampling-2_upscale-false.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.1555'
//     },
//     { 
//       id: '10', 
//       images: [
//         'https://wallpapercave.com/wp/wp7599014.jpg', 
//         'http://2.bp.blogspot.com/-C5B-EAB36GI/UsbfUG__AvI/AAAAAAAAGAs/6fajUB26tEI/s1600/diaomnd+necklace.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.2050'
//     },
//     { 
//       id: '11', 
//       images: [
//         'https://i.pinimg.com/originals/3f/55/4c/3f554c69d54675aa96a137cf635d1e97.jpg', 
//         'https://5.imimg.com/data5/SELLER/Default/2022/11/LO/RX/YF/87259759/np0004-500x500.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.949'
//     },
//     { 
//       id: '12', 
//       images: [
//         'https://getethnic.com/wp-content/uploads/2020/03/Golden-Bridal-Lehenga-15.jpg', 
//         'https://i.pinimg.com/originals/b6/6a/1c/b66a1cc8da702729f656b5e61d131045.jpg'
//       ], 
//       name: 'Grand Wear', 
//       price: 'Rs.4500'
//     },
//   ];

//   const handleBuyNow = (dress) => {
//     setCrackEffect(dress.id);
//     setTimeout(() => {
//       navigate(`/dress/${dress.id}`, { state: { dress } });
//     }, 1000); // Adjust this duration to match your animation duration
//   };

//   // const handleAddToWishlist = (dress) => {
//   //   setWishlist((prevWishlist) => [...prevWishlist, dress]);
//   // };

//   const handleAddToWishlist = (dress) => {
//     const updatedWishlist = [...wishlist, dress];
//     setWishlist(updatedWishlist);
//     navigate('/wishlist', { state: { wishlist: updatedWishlist } });
//   };
  



//   return (
//     <div className="dress-page">
//       <div className="wishlist-icon" onClick={() => navigate('/wishlist')}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//         </svg>
//       </div>
//       {dresses.map(dress => (
//         <div key={dress.id} className={`dress-item ${crackEffect === dress.id ? 'crack-effect' : ''}`}>
//           <h2>{dress.name}</h2>
//           <p>{dress.price}</p>
//           <div className="dress-images">
//             {dress.images.map((image, index) => (
//               <img key={index} src={image} alt={`${dress.name} ${index + 1}`} className="dress-image" />
//             ))}
//           </div>
//           <button onClick={() => handleBuyNow(dress)} className="buy-now">Buy Now</button>
//           <button onClick={() => handleAddToWishlist(dress)} className="wishlist-button">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//             </svg>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DressPage;

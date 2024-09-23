import React from 'react';
import printifyLogo from '../assets/printify.png';
import bigCommerceLogo from '../assets/bigcommerce_logo.jpeg';
import squarespaceLogo from '../assets/squarespace.jpg';
import wixLogo from '../assets/Wix.webp';
import woocommerceLogo from '../assets/woo.png';
import shopifyLogo from '../assets/shopify.webp';
import etsyLogo from '../assets/images.png';
import apiLogo from '../assets/api.webp';

const ConnectYourStore = () => {
  return (
    <div className="h-1/2 mt-6 text-center py-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Connect Your Store</h2>
      <p className="mt-4 text-lg md:text-xl">Printify easily integrates with major e-commerce platforms and marketplaces</p>
      
      <div className="relative flex justify-center items-center mt-12 max-w-6xl mx-auto">
        {/* Logos positioned around the central Printify logo */}
        {[
          { src: bigCommerceLogo, alt: 'BigCommerce', position: 'absolute top-[30%] left-[22%]' }, 
          { src: squarespaceLogo, alt: 'Squarespace', position: 'absolute top-[50%] right-[5%]' },
          { src: wixLogo, alt: 'Wix', position: 'absolute top-[80%] right-[-10%]' }, 
          { src: woocommerceLogo, alt: 'WooCommerce', position: 'absolute bottom-[45%] right-[-10%]' }, 
          { src: shopifyLogo, alt: 'Shopify', position: 'absolute bottom-[20%] left-[10%]' }, 
          { src: etsyLogo, alt: 'Etsy', position: 'absolute bottom-[-5%] right-[20%]' },
          { src: apiLogo, alt: 'API', position: 'absolute bottom-[80%] left-[1%]' }, 
        ].map((connection, index) => (
          <div 
            key={index} 
            className={`${connection.position} flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg transition-shadow duration-300`}>
            <img 
              src={connection.src} 
              alt={connection.alt} 
              className="max-w-full max-h-full transition-transform duration-300 transform hover:scale-105" 
            />
          </div>
        ))}

        {/* Central Printify Logo */}
        <div className="flex justify-center items-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-500 rounded-full shadow-lg transition-shadow duration-300 z-10">
          <img 
            src={printifyLogo} 
            alt="Printify" 
            className="max-w-full max-h-full transition-transform duration-300 transform hover:scale-105" 
          />
        </div>

        {/* "And More" Text */}
        <div className="absolute bottom-[-30px] left-1 transform -translate-x-1/2 flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg transition-shadow duration-300">
          <span className="text-sm sm:text-base md:text-lg text-gray-700">And more</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectYourStore;

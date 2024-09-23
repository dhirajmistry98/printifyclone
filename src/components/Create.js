import React from 'react';
import createImage from '../assets/custom-products.png';  
import sellImage from '../assets/your-products.png';      
import handleImage from '../assets/fullfillment.png';  

const Create = () => {
  return (
    <div className="container mx-auto px-8 py-24">  {/* Increased padding for a larger screen effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  {/* Increased gap between columns */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">  {/* Increased margin between image and text */}
            <img src={createImage} alt="Create" className="w-20 h-20" />  {/* Slightly larger images */}
          </div>
          <h2 className="text-xl font-semibold text-green-600 mb-3">CREATE</h2>  {/* Increased font size */}
          <h3 className="text-3xl font-bold mb-6">custom products</h3>  {/* Increased title font size */}
          <p className="text-lg text-gray-600">
            Easily add your designs to a wide range of products using our free tools
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img src={sellImage} alt="Sell" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-semibold text-green-600 mb-3">SELL</h2>
          <h3 className="text-3xl font-bold mb-6">on your terms</h3>
          <p className="text-lg text-gray-600">
            You choose the products, sale price, and where to sell
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img src={handleImage} alt="Handle" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-semibold text-green-600 mb-3">WE HANDLE</h2>
          <h3 className="text-3xl font-bold mb-6">fulfillment</h3>
          <p className="text-lg text-gray-600">
            Once an order is placed, we automatically handle all the printing and delivery logistics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;

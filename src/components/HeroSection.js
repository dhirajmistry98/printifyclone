import React from 'react';
import productImage from '../assets/hello.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 md:px-24">
      <div className="flex flex-col space-y-4 max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900">
          Create and sell custom products
        </h1>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>✅ 100% Free to use</li>
          <li>✅ 900+ High-Quality Products</li>
          <li>✅ Largest global print network</li>
        </ul>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500">
            Start for free
          </button>
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
            How it works?
          </button>
        </div>
        <p className="text-gray-500 mt-4">Trusted by over 8M sellers around the world</p>
      </div>
      <div>
        <img src={productImage} alt="Custom Product" className="w-full md:w-96" />
      </div>
    </section> 
  );
};
export default HeroSection;

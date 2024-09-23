import React, { useState } from 'react';
import { ArrowRight, PlusIcon } from 'lucide-react';
import tshirtImage from '../assets/tshirt.png';
import phonecaseImage from '../assets/phonecase.png';
import mugImage from '../assets/mug.png';
import capImage from '../assets/8016.png_1200.png';
import beanieImage from '../assets/beanie.png';

const products = [
  { name: 'T-Shirt', image: tshirtImage },
  { name: 'Phone Case', image: phonecaseImage },
  { name: 'Mug', image: mugImage },
  { name: 'Cap', image: capImage },
  { name: 'Beanie', image: beanieImage },
];

const Customization = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center px-6 md:px-12">
      {/* Left Side - Product Display with white background */}
      <div className="md:w-2/5 bg-[#4CAF50] p-10 flex flex-wrap rounded-2xl justify-center items-center">
        {products.map((product) => (
          <div
            key={product.name}
            className="m-6"  // Increased margin for better spacing
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative w-40 h-40 bg-gray-100 rounded-2xl shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#4CAF50] hover:scale-105 transform transition-all duration-300 ease-out">
              <img src={product.image} alt={product.name} className="w-28 h-28 object-contain" />  {/* Slightly larger image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200">
                  <PlusIcon className="h-6 w-6 text-[#4CAF50]" />  {/* Slightly larger icon */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Customization Options with centered green background */}
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-white p-10 flex flex-col justify-center items-center rounded-2xl shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-black text-center">Easily add your design to a wide range of products</h2>
          <p className="mb-8 text-lg text-gray-700 text-center">
            With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <button className="bg-white text-[#4CAF50] px-8 py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center mx-auto">
            All Products <ArrowRight className="ml-2 h-5 w-5" /> 
          </button>

          {/* Display Selected Product Details */}
          {selectedProduct && (
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Customize Your {selectedProduct.name}</h3>
                <button className="text-[#4CAF50]">Edit</button>
              </div>
              <div className="flex items-center">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-32 h-32 object-contain mr-4" />  {/* Larger image for selected product */}
              </div>
              <button className="mt-4 w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#45a049] transition-colors">
                Preview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customization;

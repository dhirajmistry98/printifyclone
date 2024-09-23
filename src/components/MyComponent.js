import React from 'react';
import imagePath from '../assets/avtar.png'; // Use the uploaded image

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
    >
      {children}
    </button>
  );
};

const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-700 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const MyComponent = () => {
  return (
    <div className="w-5/6 h-4/5 flex flex-col md:flex-row bg-white rounded-xl shadow-lg mx-auto my-auto">
      {/* Left Side (Text and Info) */}
      <div className="bg-gray-800 text-white p-8 flex-1 rounded-l-xl">
        <h2 className="text-3xl font-bold mb-2">Make Money, Risk-Free</h2>
        <p className="text-gray-300 mb-6">You pay for fulfillment only when you make a sale</p>

        <Card className="mb-6">
          <CardContent>
            <div className="flex justify-between mb-2">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <div className="h-px bg-gray-600 my-2"></div>
            <div className="flex justify-between text-green-400 font-semibold">
              <span>Your profit</span>
              <span>$18</span>
            </div>
          </CardContent>
        </Card>

        <Button>Start Selling</Button>

        <p className="text-sm text-gray-400">
          100% Free to use · 900+ Products · Largest print network
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="bg-gray-100 p-8 flex-1 flex items-center justify-center rounded-r-xl">
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src={imagePath}
            alt="Person illustration"
            className="object-contain"
            style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensure image fits within the container
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;


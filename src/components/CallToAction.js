import React from 'react';

const CallToAction = () => {
  const Button = ({ children, className, ...props }) => (
    <button {...props} className={`bg-white text-green-700 hover:bg-green-50 shadow-lg transition duration-300 ease-in-out py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );

  return (
    <div className="h-80 max-w-4xl mx-auto px-6 py-10 lg:py-12"> {/* Reduced max-width, padding and margin */}
      <div className="bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex md:items-center md:justify-between px-4 py-6"> {/* Reduced padding */}
          {/* Text Section */}
          <div className="text-xl md:text-3xl font-semibold text-green-800">
            Are you a large business looking for custom solutions?
          </div>
          {/* Button Section */}
          <div className="mt-4 md:mt-0">
            <Button>
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

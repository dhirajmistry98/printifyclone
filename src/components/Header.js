import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-lg">
      <div className="text-green-600 text-xl font-bold">Printify</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">Catalog</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">How it works</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
      </nav>
      <div className="space-x-2">
        <button className="px-4 py-2 border border-green-600 rounded text-green-600">Log in</button>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

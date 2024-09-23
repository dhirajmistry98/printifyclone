// src/ui/button.js
import React from 'react';

const Button = ({ variant = 'default', className = '', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded transition-colors duration-300';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    // Add more variants as needed
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

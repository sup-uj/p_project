import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center text-white bg bg-blue-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Utkarsh Jaiswal</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-800">Hello from this side</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <img src="/images/logo.png" alt="logo" width={130} height={150} className="mx-auto" />

      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        {/* Smooth scroll to sections */}
        <a href="#hero" className="hover:text-gray-400 transition duration-300">Home</a>
        <a href="#about" className="hover:text-gray-400 transition duration-300">About</a>
        <a href="#services" className="hover:text-gray-400 transition duration-300">Services</a>
        <a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a>
        <a href="#reviews" className="hover:text-gray-400 transition duration-300">Reviews</a>
        <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
      </div>

      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 All Rights Reserved by Ismail Ahmed Shah
      </p>
    </div>
  );
}

export default Footer;

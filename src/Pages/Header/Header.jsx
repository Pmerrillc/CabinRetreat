import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex  justify-end items-center">
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="section1" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">
            Property Details
          </Link>
          <Link to="section2" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">
            Things to do nearby
          </Link>
          <Link to="section3" smooth={true} duration={500} className="text-gray-700 font-semibold cursor-pointer">
            Contact Details
          </Link>
          <button
            className="bg-[#FF5A5A] text-white px-4 py-2 rounded-3xl font-bold"
            onClick={() => window.location.href = 'https://www.riversresortrentals.com/en/rivers-resort-cabin-10'}
          >
            Book Now
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-2 w-full justify-between">
        <button
            className="bg-[#FF5A5A] text-white px-4 py-2 rounded-3xl font-bold"
            onClick={() => window.location.href = 'https://www.riversresortrentals.com/en/rivers-resort-cabin-10'}
          >
          Book Now
        </button>
          <button onClick={toggleMenu} className="outline-none mobile-menu-button">
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transform fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="outline-none">
            <XIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 p-4">
          <Link to="section1" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-700 font-semibold cursor-pointer">
            Property Details
          </Link>
          <Link to="section2" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-700 font-semibold cursor-pointer">
            Things to do nearby
          </Link>
          <Link to="section3" smooth={true} duration={500} onClick={toggleMenu} className="text-gray-700 font-semibold cursor-pointer">
            Contact Details
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

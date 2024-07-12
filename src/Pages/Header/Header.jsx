import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TQWGSBDH');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.location.href = 'https://www.airbnb.com/slink/4wW5PCQ4'; // Replace with desired URL
  };

  return (
    <header className="top-0 left-0 w-full bg-white z-10 h-16">
      <div className="container mx-auto px-6 py-3 flex justify-end items-center">
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="section1" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Property Details
          </Link>
          <Link to="section2" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Things to do nearby
          </Link>
          <Link to="section3" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Contact Details
          </Link>
          <button
            onClick={handleClick} 
            className="bg-[#FF5A5A] text-white px-4 py-2 rounded-3xl font-bold font-sans">
            Book Now
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-2 w-full justify-between">
          <button onClick={handleClick} className="bg-[#FF5A5A] text-white px-4 py-2 rounded-3xl font-bold font-sans">
            Book Now
          </button>
          <button onClick={toggleMenu} className="outline-none mobile-menu-button">
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 w-full h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="outline-none">
            <XIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 p-4">
          <Link to="section1" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Property Details
          </Link>
          <Link to="section2" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Things to do nearby
          </Link>
          <Link to="section3" smooth="easeInOutQuad" duration={1000} className="text-gray-700 font-semibold cursor-pointer font-sans">
            Contact Details
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

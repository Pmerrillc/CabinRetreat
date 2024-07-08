import React from 'react';
import { FaFacebookF } from 'react-icons/fa'; 
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex flex-col md:flex-row justify-between md:items-center items-start p-8">
      <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0 md:pr-16">
        <a href='#'><h1 className="text-2xl font-sans">Cabin10.com</h1></a>
        <a href="https://www.facebook.com/riversresortcabin10?mibextid=LQQJ4d" className="text-white">
          <FaFacebookF className="text-2xl" />
        </a>
      </div>
      
      <div className="flex flex-row md:flex-row md:space-x-16 space-x-24 font-sans">
        <div className="flex flex-col space-y-2 mb-4 md:mb-0">
          <a href="https://www.airbnb.com/slink/4wW5PCQ4" className="text-white hover:text-[#6e6e6e]">AirBnB</a>
          <a href="https://www.riversresortrentals.com/en/rivers-resort-cabin-10" className="text-white hover:text-[#6e6e6e]">Lodgify</a>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-[#6e6e6e] cursor-pointer">
            Contact us
          </Link>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Link to="section2" smooth={true} duration={500} className="text-white hover:text-[#6e6e6e] cursor-pointer">
            Listing description
          </Link>
          <Link to="section2" smooth={true} duration={500} className="text-white hover:text-[#6e6e6e] cursor-pointer">
            Things to do nearby
          </Link>
          <Link to="section1" smooth={true} duration={500} className="text-white hover:text-[#6e6e6e] cursor-pointer">
            Property Details
          </Link>
        </div>
      </div>
      
      <div className="flex items-center mt-8 md:mt-0">
        <a href="https://www.airbnb.com/slink/4wW5PCQ4" className="py-2 px-4 border-2 bg-white border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white">
          Book Now
        </a>
      </div>
    </footer>
  );
}

export default Footer;

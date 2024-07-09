// TextSection.tsx
import React, { useState } from 'react';

const BookNowText = () => {
    
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="lg:w-1/2 mb-8 lg:mb-0 mt-10 md:mt-0">
        <div className='flex flex-col items-center justify-center'>
        <h1 className="text-[30px] font-bold mb-8 text-center w-3/4 md:w-full font-serif">Discover your perfect <br />
         family-friendly cabin</h1>
        <p className="text-md w-3/4 mb-8 text-center font-sans font-semibold">
        Book today and enjoy vintage charm with modern comfort tomorrow
        </p>
        <p className='w-3/4 mb-2'> <span className="font-bold font-sans">Family Fun:</span> Swing set, fire pit, and nearby Pinecrest Lake offer endless entertainment.</p>
        <p className='w-3/4 mb-2'> <span className="font-bold font-sans">Vintage Charm:</span> Cozy up in the cabin's unique knotty pine interior and wood burning stove .</p>
        <p className='w-3/4 mb-10'> <span className="font-bold font-sans">Riverfront Escape:</span> Enjoy the sounds of the Stanislaus River and go fishing from the property.</p>

        <div className="relative flex items-center w-3/4 h-[50px]">
        <button
        className="flex items-center px-6 py-2 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = 'https://www.airbnb.com/slink/4wW5PCQ4'}
         >
        <span className="flex-1 text-center font-sans">BOOK NOW</span>
        </button>
        <img
        src={isHovered ? 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990977/Group_65_yjw4go.png' : 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719994740/Group_66_om36qf.png'}
        alt="Overlay Image"
        className="absolute right-0 h-full transition duration-300 ease-in-out"
        />
        </div>

        </div>
    </div>
  );
};

export default BookNowText;

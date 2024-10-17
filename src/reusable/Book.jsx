import React, { useState } from 'react';

const Book = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-10 justify-center h-[70vh]">
      <h2 className="text-3xl md:w-full w-[70%] hover:text-black text-center justify-center font-serif font-semibold">
        You can also book us directly via
      </h2>
      <div className="relative flex items-center justify-center w-1/2 md:w-1/4 h-[50px]">      
        <button
          className="flex items-center px-6 py-2 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => window.location.href = 'https://www.airbnb.co.in/rooms/852716314972718162?viralityEntryPoint=1&unique_share_id=3D45C618-F506-4F19-8B08-0CB9C6064470&slcid=e62698d6640b4e26a926bccb6dd345b1&s=76&feature=share&adults=1&channel=native&slug=4wW5PCQ4&locale=en&_set_bev_on_new_domain=1719068338_EAMThlZmQ0YjFiZW&source_impression_id=p3_1729184671_P3JnuHns7F3W_eVQ'}
        >
          <span className="flex-1 text-center">BOOK NOW</span>
        </button>
        <img
        src={isHovered ? 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990977/Group_65_yjw4go.png' : 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719994740/Group_66_om36qf.png'}
        alt="Overlay Image"
        className="absolute right-0 h-full transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Book;

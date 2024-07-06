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
          className="relative flex items-center px-6 py-2 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-[#62C4B1] transition duration-300 ease-in-out w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = 'https://www.riversresortrentals.com/en/rivers-resort-cabin-10'}
        >
          <span className="flex-1 text-center">Lodgify</span>
        </button>
        <img
          src={isHovered ? 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720015216/Layer_1_dwxucj.png' : 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720015216/Layer_1_dwxucj.png'}
          alt="Overlay Image"
          className="absolute right-0 h-1/2 md:h-3/4 bottom-6 w-auto transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Book;

import React from 'react';

const HorizontalLine = () => {
  return (
    <div className="flex items-center justify-center w-full mt-10">
      <img src="https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719995656/forest_okuyqu.png" alt="Left Icon" className="w-3 h-3 mx-2" />
      <div className="flex-grow border-t border-gray-400"></div>
      <img src="https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719995656/forest_okuyqu.png" alt="Right Icon" className="w-3 h-3 mx-2" />
    </div>
  );
}

export default HorizontalLine;


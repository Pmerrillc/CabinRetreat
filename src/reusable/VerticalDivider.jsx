import React from 'react';

const VerticalDivider = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center h-full">
      <div className="border-l border-black h-60"></div>
      <div className="flex items-center justify-center h-16 w-16 bg-white">
        <img src="https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719995656/forest_okuyqu.png" alt="Tree Icon" className="h-4 w-4 object-contain" />
      </div>
      <div className="border-l border-black h-60"></div>
    </div>
  );
};

export default VerticalDivider;

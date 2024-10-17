import React from 'react';

const HorizontalDivider = ({ iconUrl = 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719995656/forest_okuyqu.png' }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <hr className="flex-grow border-black h-px" />
      {iconUrl && (
        <img
          src={iconUrl} // Add a descriptive alt text
          className="mx-3 h-3 w-3" // Adjust size as needed
        />
      )}
        {iconUrl && (
        <img
          src={iconUrl} // Add a descriptive alt text
          className="mx-3 h-3 w-3" // Adjust size as needed
        />
      )}
            {iconUrl && (
        <img
          src={iconUrl} // Add a descriptive alt text
          className="mx-3 h-3 w-3" // Adjust size as needed
        />
      )}
      <hr className="flex-grow border-black h-px" />
    </div>
  );
};

export default HorizontalDivider;
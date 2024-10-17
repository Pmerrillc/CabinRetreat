// Example usage in your main app
import React from 'react';
import VerticalImageCarousel from '../reusable/VerticalImageSlider';

const images = [
  'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990130/efilia_image_31_k2v1ph.jpg',
  'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990099/efilia_image_29_kn2oxo.jpg',
  'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989874/efilia_image_2_jsnrji.jpg',
  'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989877/efilia_image_1_o6i3ck.jpg',
  'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990160/efilia_image_30_xa61xr.jpg',
  // Add more image URLs as needed
];

const VerticalImage = () => {
  return (
    <div className=" w-1/2 h-1/2">
      <VerticalImageCarousel images={images} />
    </div>
  );
};

export default VerticalImage;

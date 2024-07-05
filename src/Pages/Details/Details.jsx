import React from 'react';
import VerticalImageSlider from '../../components/VerticalImageSlider';
import DetailsText from '../../components/DetailsText';

const Details = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <VerticalImageSlider />
        <DetailsText />
      </div>
    </div>
  );
};

export default Details;

import React from 'react'
import VerticalImageSlider from '../../components/VerticalImageSlider';
import DetailsText from '../../components/DetailsText';

const Details = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center w-full md:w-[100%]">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-28">
        <VerticalImageSlider />
        <DetailsText />
      </div>
    </div>
  )
}

export default Details;

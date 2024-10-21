import React from 'react';
import { useMediaQuery } from 'react-responsive';
import VerticalImageSlider from '../../components/VerticalImageSlider';
import DetailsText from '../../components/DetailsText';
import ImageGrid from '../../components/ImageGrid';
import TextDetails from '../../components/TextDetails';
import { Element } from 'react-scroll';

const Details = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <Element name="section1" className="min-h-[70vh] flex flex-col justify-center w-full md:w-[100%] md:mb-[10vh]">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {isDesktopOrLaptop ? <VerticalImageSlider /> : <ImageGrid />}
        {isDesktopOrLaptop ? <DetailsText /> : <TextDetails />}
      </div>
    </Element>
  );
}

export default Details;

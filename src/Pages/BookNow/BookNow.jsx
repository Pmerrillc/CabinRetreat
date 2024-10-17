import React from 'react';
import BookNowText from '../../components/BookNowText';
import HorizontalImageSlider from '../../components/HorizontalImageSlider';

const BookNow = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center w-full md:w-[100%] mt-10 ">
      <div className="flex flex-col lg:flex-row lg:space-x-16 items-center justify-center">
        <BookNowText/>
        <HorizontalImageSlider/>
      </div>
    </div>
  );
}

export default BookNow;

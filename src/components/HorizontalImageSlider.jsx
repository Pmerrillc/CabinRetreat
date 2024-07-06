import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const HorizontalImageSlider = () => {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990127/efilia_image_5_rr4s81.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990130/efilia_image_31_k2v1ph.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990095/efilia_image_17_mozxlr.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990078/efilia_image_15_hawyrm.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989930/efilia_image_3_akg13v.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[600px] md:h-[780px] w-[100%] md:w-[65%] py-16 px-2 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full md:rounded-tl-[4rem] bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-red-500' : 'text-black'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalImageSlider;

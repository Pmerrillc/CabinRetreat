import React, { useState, useEffect, useRef } from "react";

const images = [
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990130/efilia_image_31_k2v1ph.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990099/efilia_image_29_kn2oxo.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989874/efilia_image_2_jsnrji.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989877/efilia_image_1_o6i3ck.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990160/efilia_image_30_xa61xr.jpg" },
];

const VerticalImageSlider = () => {
  const [carouselArray, setCarouselArray] = useState(images);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [carouselArray]);

  const updatedGallery = (array) => array.slice(0, 5);

  const setCurrentState = (direction) => {
    let newCarouselArray;
    if (direction === "previous") {
      newCarouselArray = [
        carouselArray[carouselArray.length - 1],
        ...carouselArray.slice(0, carouselArray.length - 1),
      ];
    } else {
      newCarouselArray = [...carouselArray.slice(1), carouselArray[0]];
    }
    setCarouselArray(updatedGallery(newCarouselArray));
  };

  const startAutoplay = (interval = 5000) => {
    intervalRef.current = setInterval(() => {
      setCurrentState("next");
    }, interval);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className="flex items-center justify-center md:justify-start  w-full">
      <div className="relative flex flex-col items-center h-fit overflow-hidden">
        {carouselArray.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className={`relative transition-opacity duration-1000 ease-in-out ${getOpacityClass(index)} mb-4`} /* Added spacing */
            style={{ top: `${index * 10}%` }}
          />
        ))}
      </div>
    </div>
  );

  function getOpacityClass(index) {
    switch (index) {
      case 0:
        return "opacity-40 w-28 h-16";
      case 1:
        return "opacity-80 w-60 h-32 ";
      case 2:
        return "opacity-100 w-[450px] h-[280px]";
      case 3:
        return "opacity-80 w-60 h-32";
      case 4:
        return "opacity-40 w-28 h-16";
      default:
        return "";
    }
  }
};

export default VerticalImageSlider;

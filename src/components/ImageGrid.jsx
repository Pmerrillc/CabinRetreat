import React from "react";

const images = [
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990130/efilia_image_31_k2v1ph.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990099/efilia_image_29_kn2oxo.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989874/efilia_image_2_jsnrji.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719989877/efilia_image_1_o6i3ck.jpg" },
  { src: "https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990160/efilia_image_30_xa61xr.jpg" }
];

const ImageGrid = () => {
  return (
    <div className="container mx-auto p-8 mb-20 md:mb-0">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={images[0].src}
            alt="Main"
            className="w-full h-80 md:h-full object-cover"
          />
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4  flex-none w-full md:w-auto">
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-40 md:h-56 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

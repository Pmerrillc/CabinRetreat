import React from 'react';
import HorizontalLine from '../reusable/HorizontalLine';

const DetailsText = () => {

  const features = [
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Group_55_fks8cm.png', text: 'Mountain experience' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Group_39_evuqf3.png', text: 'Address', detail: '28635 Herring Creek Lane #10, Strawberry, CA 95375, Cabin 10, along the Stanislaus Rivers.' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Vector-1_id7vuz.png', text: '2 bathroom' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Group_52_bgzumh.png', text: 'Dining room' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Layer_1_extsi5.png', text: 'Master suite' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Vector-2_c83gw3.png', text: '3 bedroom' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Vector-3_qbqoes.png', text: 'Stone fireplace' },
    { src: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720012206/Vector_wvsvcw.png', text: 'Sleeps 7' }
  ];
  
  return (
    <div className="md:w-full w-[90%] flex flex-col items-center justify-center h-[100vh] relative">
      <div className="text-3xl font-semibold mb-8 text-center">
        <h1>Nature-Filled Mountain<br />Cabin Retreat</h1>
      </div>
      <div className="text-md font-medium text-center w-[95%]">
        Relax in the vintage charm and comfort of this river view mountain
        retreat minutes from Pinecreat lake and Dodge Ridge. A family friendly
        vacation location with something for everyone. Enjoy a swing set,
        fire pit or try your luck fishing the river at the edge of the
        property. Spend a day at the lake, go for a hike, or rent a downhill
        mountain bike. BBQ under the tall pines and enjoy a meal on the
        picturesque private deck. Check out the Space section for a complete
        list of nearby things to do!
      </div>
      <HorizontalLine />
      <div className="container mt-10 md:ml-20">
  {/* Mobile view */}
  <div className="block md:hidden">
    <div className="flex flex-col space-y-6 mb-6">
      <div className="flex items-center space-x-2 font-bold">
        <img src={features[0].src} alt="Mountain experience" className="w-6 h-6" />
        <span>{features[0].text}</span>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2 font-bold">
          <img src={features[1].src} alt="Address" className="w-6 h-6" />
          <span>{features[1].text}</span>
        </div>
        <div>
          <span className="text-xs text-black font-semibold">{features[1].detail}</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {features.slice(2).map((icon, index) => (
        <div key={index} className="flex items-center space-x-2 font-bold">
          <img src={icon.src} alt={`Icon ${index + 3}`} className="w-6 h-6" />
          <span>{icon.text}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Desktop view */}
  <div className="hidden md:block">
    <div className="flex flex-row space-x-20 md:space-x-8 mb-6">
      <div className="flex flex-row space-x-4 items-center w-[40%] font-bold">
        <img src={features[0].src} alt="Mountain experience" className="w-6 h-6" />
        <span>{features[0].text}</span>
      </div>
      <div className="flex flex-col md:flex-row space-y-2">
        <div className="flex items-center space-x-2 font-bold">
          <img src={features[1].src} alt="Address" className="w-6 h-6" />
          <span>{features[1].text}</span>
        </div>
        <div className="pl-8 md:w-[65%]">
          <span className="text-xs text-black font-semibold">{features[1].detail}</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-10">
      {features.slice(2).map((icon, index) => (
        <div key={index} className="flex items-center space-x-2 font-bold">
          <img src={icon.src} alt={`Icon ${index + 3}`} className="w-6 h-6" />
          <span>{icon.text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default DetailsText;

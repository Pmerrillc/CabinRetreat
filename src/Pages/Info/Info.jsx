import React, { useState } from 'react';
import '../Info/Info.css'; // Ensure correct path to your CSS

const Info = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const [imageUrls] = useState({
    1: {
      url1: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024770/29-web-or-mls-28365_Herring_Creek_Re_27_1_lnxc8c.png',
      url2: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024782/pexels-kindelmedia-7148674_1_tbjuay.png',
    },
    2: {
      url1: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024782/pexels-bianeyre-1236028_1_jxufnr.png',
      url2: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024781/pexels-visitalmaty-848595_1_gqwixs.png',
    },
    3: {
      url1: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024783/pexels-enginakyurt-2531188_1_qy6bp8.png',
      url2: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720024782/pexels-pixabay-70746_1_vnikgr.png',
    },
    4: {
      url1: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720028681/pexels-askar-abayev-5637699_1_hts0ao.jpg',
      url3: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720028681/pexels-shkrabaanthony-4753648_1_xxo9mz.jpg',
      url2: 'https://res.cloudinary.com/dkcgwqdmm/image/upload/v1720028682/pexels-jopwell-1325661_1_schl6c.jpg',
    },
  });

  const handleHover = (boxNumber) => {
    setHoveredBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  const getContent = (boxNumber, contextBox) => {
    if (contextBox === 1 && boxNumber === 2) {
      return (
        <div className="box-content font-normal text-[10px] md:text-[12px] text-black">          
        <p>Swing Set: Perfect for kids to enjoy.</p>
        <p>Fire Pit: An evening under the stars.</p>
        <p>River Fishing: Fishing in the river right at the edge of the property.</p>
        <p>Community Pool</p>
        </div>
      );
    } else if (contextBox === 1 && boxNumber === 3) {
      return (
        <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
          <p>Exclusive Dining: Discover hidden culinary gems.</p>
          <p>Live Entertainment: Enjoy local music and performances.</p>
        </div>
      );
    } else if (contextBox === 1 && boxNumber === 3) {
      return (
        <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
          <p>Exclusive Dining: Discover hidden culinary gems.</p>
          <p>Live Entertainment: Enjoy local music and performances.</p>
        </div>
      );
    } else {
      switch (boxNumber) {
        case 1:
          return (
            <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
              <p>Swing Set: Perfect for kids to enjoy.</p>
              <p>Fire Pit: An evening under the stars.</p>
              <p>River Fishing: Fishing in the river right at the edge of the property.</p>
              <p>Community Pool</p>
            </div>
          );

        case 2:
          return (
            <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
            <p>Hiking Trail to Pinecrest Lake</p>
            <p>BBQ Area: Grill and dine under the tall pines.</p>
            <p>Private Deck: Relax and enjoy meals on the picturesque deck</p>
            </div>
          );
          case 3:
            return (
                <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
                  <p>Dodge Ridge:
                  Winter sports(skiing/snowboarding)</p>
                  <p>Tubing and snowplay</p>
                  <p>Summer mountain biking</p>
                  <p>Yoga classes</p>
                  <p>Disc golf courses</p>
                  <p>Live music</p>
                  <p>Kennedy Meadows:
                  Guided horseback rides
                  Extensive hiking and trips</p>
              </div>
            );
            case 4:
              return (
                  <div className="box-content font-normal text-[10px] md:text-[12px] text-black">
                  <p>Beach: Sun and fun</p>
                  <p>Boat rentals</p>
                  <p>Paddle boarding</p>
                  <p>Swimming </p>
                  <p>Hiking trails</p>
                  <p>Fishing spots</p>
                  <p>Outdoor summer movies</p>
                </div>
              );
              case 5:
                return (
                    <div className="box-content font-normal text-[10px] md:text-[12px] text-black">                    
                    <p>Strawberry General Store: Snacks, beer, wine, live music.</p>
                    <p>Strawberry Inn: Local cuisine, drinks.</p>
                    <p>Steam Donkey: Popular spot in Pinecrest.</p>
                    <p>Mia's Pizza: Brick oven specialties.</p>
                  </div>
                );
                case 6:
                  return (
                      <div className="box-content font-normal text-[10px] md:text-[12px] text-black">                    
                    <p>Pine Cone Cafe: Classic American dishes.</p>
                    <p>Sugar Shack: Sweets and treats.</p>
                    <p>Pizza Factory: Family dining, Twain Harte.</p>
                    <p>Diamond Jim’s Bar: Local bar, Mi Wuk.</p>
                    <p>Ed's Cocktail Lounge: Cocktails, Twain Harte.</p>
                    </div>
                  );
        default:
          return null;
      }
    }
  };

  return (
    <div className="description-container">
      <h1 className="text-4xl font-bold">Things to do nearby</h1>
      <div className="row">
        <div
          className={`box box1 ${hoveredBox === 1 ? 'hovered' : ''}`}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: hoveredBox === 1
              ? `url(${imageUrls[4].url1})`
              : 'none',
            backgroundColor: (hoveredBox === 2 || hoveredBox === 3) ? '#FFDEA6' : '#76422C',
            transition: 'background-image 0.2s ease-in-out, background-color 0.4s ease-in-out',
          }}
        >
          {(hoveredBox !== 2 && hoveredBox !== 3) && <span>On the Property</span>}
          {hoveredBox === 2 && getContent(4)}
          {hoveredBox === 3 && getContent(5)}
        </div>
        <div
          className={`box box2 ${hoveredBox === 2 ? 'hovered' : ''}`}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: hoveredBox === 2
              ? `url(${imageUrls[4].url2})`
              : 'none',
            backgroundColor: (hoveredBox === 1 || hoveredBox === 3) ? '#FFDEA6' : '#76422C',
            transition: 'background-image 0.2s ease-in-out, background-color 0.4s ease-in-out',
          }}
        >
          {(hoveredBox !== 1 && hoveredBox !== 3) && <span>Nearby Attractions</span>}
          {hoveredBox === 1 && getContent(2, 1)}
          {hoveredBox === 3 && getContent(6)}
        </div>
        <div
          className={`box box3 ${hoveredBox === 3 ? 'hovered' : ''}`}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: hoveredBox === 3
              ? `url(${imageUrls[4].url3})`
              : 'none',
            backgroundColor: (hoveredBox === 1 || hoveredBox === 2) ? '#FFDEA6' : '#76422C',
            transition: 'background-image 0.2s ease-in-out, background-color 0.4s ease-in-out',
          }}
        >
          {(hoveredBox !== 1 && hoveredBox !== 2) && <span>Local Dining and Entertainment</span>}
          {hoveredBox === 1 && getContent(2, 2)}
          {hoveredBox === 2 && getContent(3)}
        </div>
      </div>
      <div className="row">
        <div
          className={`box box4 ${hoveredBox ? 'hovered' : ''}`}
          style={{
            backgroundImage: hoveredBox
              ? `url(${imageUrls[hoveredBox].url1})`
              : 'none',
              transition: 'background-image 0.2s ease-in-out, background-color 0.4s ease-in-out',
          }}
        />
        <div
          className={`box box5 ${hoveredBox ? 'hovered' : ''}`}
          style={{
            backgroundImage: hoveredBox
              ? `url(${imageUrls[hoveredBox].url2})`
              : 'none',
              transition: 'background-image 0.2s ease-in-out, background-color 0.4s ease-in-out',
          }}
        />
      </div>
    </div>
  );
};

export default Info;

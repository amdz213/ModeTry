import React, { useState } from 'react';
import controller from "../assetr/manimg.png";
import twoController from "../assetr/manimeone.png";
import threeController from "../assetr/manimgtwo.png";
import forController from "../assetr/manimgthree.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Create a new SCSS file for vertical carousel styles

const ImageSlider = () => {
  const data = [
    {
      image: controller,
      // caption: "Image 1",
    },
    {
      image: twoController,
      // caption: "Image 2",
    },
    {
      image: threeController,
      // caption: "Image 3",
    },
    {
      image: forController,
      // caption: "Image 3",
    },
 
  ];

  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleThumbClick = (index) => {
    setSelectedSlide(index);
  };
  return (
    <div className="imgSlider p-2 vertical-carousel-container">
      {/* Add a custom class for vertical carousel */}
      <div className='d-flex'>
      <div className="custom-thumbs-container">
          {/* Render custom thumbnails on the left side */}
          <div className="custom-thumbs" >
            {data.map((item, index) => (
              <div key={index} className="thumb" onClick={() => handleThumbClick(index)}>
                <img src={item.image} alt={item.caption} />
              </div>
            ))}
          </div>
        </div>
      <Carousel
        showThumbs={false}
        selectedItem={selectedSlide}
        infiniteLoop={true}
        autoPlay={false}
        dots={false}
        showArrows={true}
        showStatus={false}
        className="vertical-carousel" // Add a custom class for vertical carousel
      >
        {data.map((item, index) => (
          <div key={index} className=''>
            {/* Add a custom class for vertical slide */}
            <img src={item.image}  alt={item.caption} />
          </div>
        ))}
      </Carousel>
      </div>

    </div>
  );
};

export default ImageSlider;

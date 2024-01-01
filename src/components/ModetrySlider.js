import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bookme from "../assetr/finalsale.png";


const ModetrySlider = () => {
  const settings2 = {
    dots: true,
    nextArrow: false,
    prevArrow: false,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container-fluid poppins">
      <Slider {...settings2}>
        <img src={Bookme} className="w-100" alt="" />
        <img src={Bookme} className="w-100" alt="" />
        <img src={Bookme} className="w-100" alt="" />
        <img src={Bookme} className="w-100" alt="" />
        <img src={Bookme} className="w-100" alt="" />
        <img src={Bookme} className="w-100" alt="" />
      </Slider>
      </div>
    </div>
  );
};

export default ModetrySlider;

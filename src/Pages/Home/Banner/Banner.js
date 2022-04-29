import React from "react";
import Slider from "react-slick";
import './Banner.css'
const Banner = () => {
  // carousel settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/4d1YRz8/banner1.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/TgL1g0T/banner2.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/PNtTQ0c/banner3.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/F0JTjGS/banner4.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/71QWZSq/banner5.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/D9sMsdr/banner6.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

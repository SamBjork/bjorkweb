import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll-down/ScrollDown";

import "./carousal.css";

import Space from "../../assets/img/carousal/space.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";

const CustomCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={5500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Space}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default CustomCarousel;

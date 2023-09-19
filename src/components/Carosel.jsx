import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Carosel = () => {
  return (
    <>
      <Carousel
        indicators={false}
        slide={false}
        controls={false}
        interval={3000}
        className="lg:px-40 sm:px-6 mt-4"
      >
        <Carousel.Item className="lg:h-64 sm:h-40">
          <img
            src={"https://opstra.definedge.com/uoa-banner.png"}
            alt=""
            className="w-full h-full"
          />
        </Carousel.Item>
        <Carousel.Item className="lg:h-64 sm:h-40">
          <img
            src={"https://opstra.definedge.com/optest-launch-banner.png"}
            alt=""
            className="rounded-md w-full h-full"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carosel;

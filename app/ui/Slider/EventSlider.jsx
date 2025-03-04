import React from "react";
import Event from "../Events";
import Div from "../Div";
import Slider from "react-slick";

export default function EventSlider({ data }) {
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {data.map((item, index) => (
        <div key={index}>
          <Event
            title={item.title}
            subtitle="View Event"
            href={item.href}
            src={item.src}
          />
        </div>
      ))}
    </Slider>
  );
}

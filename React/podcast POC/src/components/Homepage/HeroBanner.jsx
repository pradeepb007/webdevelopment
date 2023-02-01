import React from "react";
import Slider from "react-slick";
import styles from "./HeroBanner.module.scss";
import SliderData from "../../json/homeslider.json";

export default function HeroImage() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 565,
        settings: {
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {SliderData.map((slider, index) => (
          <div className={styles.slide} key={index}>
            <a href="/PodcastList" title={slider.title}>
              <img
                src={slider.imageURL}
                alt={slider.title}
                className={styles.sliderImage}
              />
              <img
                src="./assets/images/podcast-logo.png"
                alt="podcast-logo"
                className={styles.sliderLogoImage}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

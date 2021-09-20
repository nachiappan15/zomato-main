import React from 'react'
import Slider from "react-slick"
import CarouselCard from "./CarouselCard"

// Arrows
import { PrevArrow, NextArrow } from "../../../Extended Components/CarouselArrow"

const SimilarRestaurantCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} >
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>

    </>
  )
}

export default SimilarRestaurantCarousel

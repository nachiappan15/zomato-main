import React from 'react'
import Slider from 'react-slick'

import CarouselCard from '../MasterCarousel/CarouselCard'
// arrows
import { PrevArrow, NextArrow } from "../../../Extended Components/CarouselArrow"

const MasterCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            }]
    }
    return (
        <>
            <Slider {...settings}>
                <CarouselCard />
                <CarouselCard />
            </Slider>

        </>
    )
}

export default MasterCarousel

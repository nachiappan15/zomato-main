import React from 'react'
import Slider from "react-slick"
// component
import CarouselCard from './CarouselCard'

// Arrows
import { PrevArrow, NextArrow } from '../Extended Components/CarouselArrow'

const ReusableMasterCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    

                }
            },
            {
                breakpoint: 767,
                settings: {

                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,

                }
            }
        ]
    }
    return (
        <>
            <Slider {...settings}>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </Slider>
        </>
    )
}

export default ReusableMasterCarousel

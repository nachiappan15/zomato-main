import React from 'react'
import CarouselCard from '../SecondaryCarousel/CarouselCard'

import Slider from 'react-slick'


// arrows
import { PrevArrow, NextArrow } from "../../../Extended Components/CarouselArrow"

// mobile view
const Mobile = () => {
    
    return (
        <>
            <div className="grid grid-cols-3 gap-3 md:hidden" >
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />

            </div>
        </>
    )
}

// tab view
const Tab = () => {
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return (
        <>
            <div className="hidden md:block  ">
                <Slider {...settings}>
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />


                </Slider>
            </div>


        </>
    );
}


const SecondaryCarousel = () => {
    return (
        <>

            <Mobile />
            <Tab />

        </>
    )
}


export default SecondaryCarousel;
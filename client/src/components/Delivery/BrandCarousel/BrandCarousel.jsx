import React from 'react'
import Slider from "react-slick"
// components
import BrandsCards from './BrandsCards'

// Temp Data
import TempBrandData from '../../../Temp Data/TempBrandData'

// Arrows
import { PrevArrow, NextArrow } from '../../Extended Components/CarouselArrow'




// tab view
const Tab = (props) => {
    const data = props.data;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
    }
    return (
        <>
            <div >
                <Slider {...settings}>
                    {data.map((item) => {

                        return (
                            <> <BrandsCards  {...item} /></>
                        )
                    })}


                </Slider>
            </div>


        </>
    );
}
const BrandCarousel = () => {
    return (
        <>
            
            <Tab data={TempBrandData} />
        </>
    )
}

export default BrandCarousel

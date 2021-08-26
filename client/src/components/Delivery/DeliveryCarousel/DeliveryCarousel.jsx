import React from 'react'
import Slider from "react-slick"

// Temp Data
import DeliveryCarouselData from '../../../Temp Data/DeliveryCarouselData'


// component
// DeliveryCaurouselCard
import DeliveryCaurouselCard from './DeliveryCaurousel.Card'
// Arrows
import { PrevArrow, NextArrow } from '../../Extended Components/CarouselArrow'


// mobile view
const Mobile = (props) => {
    const data = props.data;
    return (
        <>
            <div className="grid grid-cols-3 gap-3 md:hidden" >
                {data.map((item) => {
                    
                    if (item.id <= 6) return <>  <DeliveryCaurouselCard  {...item} /></>
                  return ;
                    
                })}

            </div>
        </>
    )
}

// tab view
const Tab = (props) => {
    const data = props.data;
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
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }


            }]
    }
    return (
        <>
            <div className="hidden md:block  ">
                <Slider {...settings}>
                    {data.map((item) => {

                        return (
                            <> <DeliveryCaurouselCard  {...item} /></>
                        )





                    })}


                </Slider>
            </div>


        </>
    );
}


const DeliveryCarousel = () => {
    return (
        <>

            <Mobile data={DeliveryCarouselData} />
            <Tab data={DeliveryCarouselData} />

        </>
    )
}

export default DeliveryCarousel

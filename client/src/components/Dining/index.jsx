import React, { useState } from 'react'
import { IoMdArrowDropright } from "react-icons/io"
import ReusableMasterCarousel from '../ReusableMasterCarousel'
// component
// RestaurantCard
import RestaurantCard from '../ReusableRestaurantCard/RestaurantCard'


const Dining = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "12345699",
            photos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name: "Donut House",
            cusine: ["Beverages", "drinks", "Sweet", "Bakery"],
            averageCost: 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue: 4.3

        },
        {
            _id: "12345699",
            photos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name: "Donut House",
            cusine: ["Beverages", "drinks", "Sweet", "Bakery"],
            averageCost: 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue: 4.3

        },
        {
            _id: "12345699",
            photos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name: "Donut House",
            cusine: ["Beverages", "drinks", "Sweet", "Bakery"],
            averageCost: 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue: 4.3

        },
        {
            _id: "12345699",
            photos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name: "Donut House",
            cusine: ["Beverages", "drinks", "Sweet", "Bakery"],
            averageCost: 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue: 4.3

        },
    ]);




    return (
        <>
            <div className="my-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl mb-1 font-medium text-gray-600 tracking-wide lg:font-semibold lg:text-3xl lg:text-gray-700 lg:mb-5">Collections</h1>
                    <p className="text-sm lg:text-lg text-req-500 flex items-center">All collections in Mumbai <IoMdArrowDropright /></p>
                </div>
                <p className="text-sm lg:text-xl text-gray-500 my-2">Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
                <ReusableMasterCarousel />
            </div>


            <div className="my-5">
                <h1 className="text-xl mb-2 font-medium text-gray-600 tracking-wide lg:font-semibold lg:text-3xl lg:text-gray-700 lg:mb-5">Restaurants</h1>
                <div className="grid grid-col-1 lg:grid-cols-3 lg:gap-8 lg:px-4 lg:mt-5 w-full">
                    {restaurantList.map(i => {
                        return <><RestaurantCard {...i} /> </>

                    })}

                </div>

            </div>
        </>
    )
}

export default Dining

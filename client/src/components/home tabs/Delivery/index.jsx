import React ,{useState} from 'react'


// Carousel
import DeliveryCarousel from './DeliveryCarousel/DeliveryCarousel'
import BrandCarousel from './BrandCarousel/BrandCarousel'
import RestaurantCard from '../../Home Components/ReusableRestaurantCard/RestaurantCard'


const Delivery = () => {

    // use state
    const [restaurantList, setRestaurantList] = useState([
        {
            _id:"12345699",
            photos:[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name : "Donut House",
            cusine : ["Beverages" , "drinks" , "Sweet" , "Bakery"],
            averageCost : 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue:4.3

        },
        {
            _id:"12345699",
            photos:[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name : "Donut House",
            cusine : ["Beverages" , "drinks" , "Sweet" , "Bakery"],
            averageCost : 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue:4.3

        },
        {
            _id:"12345699",
            photos:[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
            ],
            name : "Donut House",
            cusine : ["Beverages" , "drinks" , "Sweet" , "Bakery"],
            averageCost : 123,
            isPro: true,
            isOff: 78,
            durationOfDelivery: 72,
            restaurantReviewValue:4.3

        }
    ]);

    console.log(restaurantList);
    return (
        <>
        <div className = "my-3">
        <h1 className = "text-xl mb-1 font-medium text-gray-600 tracking-wide lg:text-3xl lg:font-semibold lg:text-gray-700 lg:mb-5">Inspiration for your first order</h1>
            <DeliveryCarousel className="mt-2"/>

        </div>
        <div className = "my-3">
        <h1 className = "text-xl mb-2 font-medium text-gray-600 tracking-wide lg:text-3xl lg:font-semibold lg:text-gray-700 lg:mb-5">Top brands in spotlight </h1>
            <BrandCarousel className="mt-2"/>

        </div>
        <div className = "my-3">
        <h1 className = "text-xl mb-2 font-medium text-gray-600 tracking-wide lg:font-semibold lg:text-3xl lg:text-gray-700 lg:mb-5">Restaurants</h1>
            <div className = "grid grid-col-1 lg:grid-cols-3 lg:gap-8 lg:px-4 lg:mt-5 w-full">
               {restaurantList.map(i => {
                   return <><RestaurantCard {...i}/> </>
                    
               })}
                
            </div>

        </div>
       
            
        </>
    )
}

export default Delivery
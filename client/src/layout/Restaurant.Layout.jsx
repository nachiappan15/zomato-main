import React, {useDispatch} from 'react'
import { useParams } from 'react-router-dom'
import RestaurantNavbar from '../components/Navbar/Restaurant.Navbar'


import ImageGrid from '../components/Restaurant Components/ImageGrid'
import RestaurantInfo from '../components/Restaurant Components/RestaurantInfo'
import ResInfoButtons from '../components/Restaurant Components/ResInfoButtons'
import ResTabContainer from '../components/Restaurant Components/ResTabContainer'
import CartContainer from '../components/Cart/CartContainer'

// REDUX
import {getSpecificRestaurant} from "../Redux/Reducer/restaurant/restaurant.action"





const RestaurantLayout = (props) => {

    const {id}= useParams();

    


    const nav_images = [
        "https://b.zmtcdn.com/data/pictures/chains/0/67170/8b468c8bce485d9e0ec13c75d97ab0b0_featured_v2.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/67170/096d3be915fc540d58b8cf8d3a6874d4.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/67170/1ba128786fe1d3db026928a52041eb7c.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/0/67170/c40b6554f98d77a53d4e35faf4fa9983.jpg",
        "https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg"
    ];
    const res_info = {
        title: "Cake Square",
        restaurantRating: 3.7,
        deliveryRating: 4.3,
        cusine: ["Bakery", "Desserts"],
        address: "Purasavakkam, Chennai"



    }

    return (
        <>
            <RestaurantNavbar />
            <div className=" container mx-auto px-4 lg:px-44  ">
                <ImageGrid images={nav_images} />
                <RestaurantInfo {...res_info} />
               <ResInfoButtons/>
               <ResTabContainer/>
               {props.children}
               
            </div>
            <CartContainer/>
        </>
    )
}

export default RestaurantLayout

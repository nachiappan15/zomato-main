import React , {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"; 
import {useDispatch } from "react-redux"

// components
// Delivery
import Delivery from '../components/home tabs/Delivery'
// Dining
import Dining from '../components/home tabs/Dining';
// NightLife
import NightLife from '../components/home tabs/NightLife';
// Nutrition
import Nutrition from'../components/home tabs/Nutrition';




// Redux action

import { getRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';


const Home = () => {
    const {type} = useParams();

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getRestaurant());
    // }, [])
    return (
        <>
        {type=== "delivery" && <Delivery/>}
        {type=== "dining" && <Dining/>}
        {type=== "night" && <NightLife/>}
        {type=== "nutrition" && <Nutrition/>}
            
        </>
    )
}

export default Home

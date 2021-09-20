import React from 'react'
import {useParams} from "react-router-dom"; 

// components
// Delivery
import Delivery from '../components/home tabs/Delivery'
// Dining
import Dining from '../components/home tabs/Dining';
// NightLife
import NightLife from '../components/home tabs/NightLife';
// Nutrition
import Nutrition from'../components/home tabs/Nutrition';

const Home = () => {
    const {type} = useParams();
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

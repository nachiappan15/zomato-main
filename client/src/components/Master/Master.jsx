import React from 'react'
import {useParams} from "react-router-dom"; 

// components
// Delivery
import Delivery from '../Delivery';
// Dining
import Dining from '../Dining';
// NightLife
import NightLife from '../NightLife';

const Master = () => {
    const {type} = useParams();
    return (
        <>
        {type=== "delivery" && <Delivery/>}
        {type=== "dining" && <Dining/>}
        {type=== "night" && <NightLife/>}
            
        </>
    )
}

export default Master

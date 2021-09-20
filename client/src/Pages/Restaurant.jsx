import React from 'react'
import {useParams} from "react-router-dom"; 
import MenuPart from '../components/Restaurant tabs/MenuPart';


import OrderOnline from '../components/Restaurant tabs/OrderOnline';
import Overview from '../components/Restaurant tabs/Overview';
import Photos from '../components/Restaurant tabs/Photos';
import Reviews from '../components/Restaurant tabs/Reviews';


const Restaurant = () => {
    
        const {tab} = useParams();
    return (
        <>
       {tab=="overView" && <Overview/>}
       {tab=="orderOnline" && <OrderOnline/>}
       {tab=="reviews" && <Reviews/>}
       {tab=="menu" && <MenuPart/>}
       {tab=="photos" && <Photos/>}
            
        </>
    )
    
}

export default Restaurant

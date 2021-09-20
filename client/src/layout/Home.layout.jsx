import React from 'react'



// components
// Navbar
import Navbar from '../components/Navbar'
// FoodTab
import FoodTab from '../components/Home Components/FoodTab'




const HomeLayout = (props) => {
    return (
        <>
            <Navbar />
            <FoodTab/>
            <div className=" container mx-auto px-4 lg:px-44  ">
                {props.children}
                
            </div>
            
           


        </>
    )
}

export default HomeLayout

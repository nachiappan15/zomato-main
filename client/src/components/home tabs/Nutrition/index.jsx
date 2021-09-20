import React from 'react'
import MasterCarousel from './MasterCarousel/Index'
import NutritionCard from './NutririonCard'
import SecondaryCarousel from './SecondaryCarousel'

const Nutrition = () => {
    return (
        <>
           <MasterCarousel  />
           <SecondaryCarousel/>


           <div className="my-5">
                <h1 className="text-xl mb-2 font-medium text-gray-600 tracking-wide lg:font-semibold lg:text-3xl lg:text-gray-700 lg:mb-5">All Products</h1>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 md:px-2 lg:px-4 lg:mt-5 w-full">
                <NutritionCard/>
                <NutritionCard/>
                <NutritionCard/>
                <NutritionCard/>
                <NutritionCard/>
                <NutritionCard/>

                </div>

            </div>
           
        </>
    )
}

export default Nutrition

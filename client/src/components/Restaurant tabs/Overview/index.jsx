import React from 'react'

import Cusines from '../Overview/Cusines';
import SimilarRestaurantCarousel from './SimilarRestaurantCarousel';
import Menu from './Menu';
import DeliveryRatings from './DeliveryRating';
import ReviewCard from '../../Restaurant Components/ReviewCard';
import MapComponent from '../../Restaurant Components/MapComponent';




const Overview = () => {

    return (
        <>
            <div className=" flex flex-col md:flex-row relative gap-3 justify-between">


                <div className=" h-full w-full  md:w-4/6  ">
                    <h1 className="text-lg md:text-2xl font-semibold my-4">About this Place</h1>

                    <div className="mb-4">
                        <Menu />
                    </div>

                    <div className="mb-4">
                        <Cusines />
                    </div>

                    <div className="mb-4">
                        <h4 className="text-xl  font-medium mb-2">
                            Average Cost
                        </h4>
                        <p className="text-sm md:text-base flex flex-col gap-1">
                            <span className="text-gray-600">
                                ₹600 for two people (approx.)
                            </span>
                            <span className="text-gray-500">
                                Exclusive of applicable taxes and charges, if any
                            </span>
                            <span className="text-gray-400 ">
                                How do we calculate cost for two?
                            </span>
                        </p>
                        <p className="text-sm md:text-base text-gray-600 my-3">
                            Cash and Cards accepted
                        </p>
                    </div>

                    <div className="w-full h-full my-4" >
                        <h4 className="text-xl font-medium mb-2">Similar Restaurants</h4>
                        <SimilarRestaurantCarousel />
                    </div>

                    <div className="mb-4" >
                        <h4 className="text-xl font-medium mb-2">Rate your Delivery Experience</h4>
                        <div>
                            <DeliveryRatings />
                        </div>
                    </div>

                    <div className="my-4 md:hidden flex flex-col gap-3">
                        <MapComponent mapLocation={[13.121138811680156, 80.14875751114344]} />

                    </div>

                    <div className="mb-4 flex flex-col gap-3">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>

                </div>


                <aside style={{ height: "fit-content" }} className=" hidden md:flex p-3   md:w-2/6  sticky top-0 right-0   shadow-xl  flex-col gap-3">
                    <div className="">
                        <h4 className="text-xl  font-medium mb-3">Call</h4>
                        <h5 className="text-req-400  font-medium">+91 9865324175</h5>
                    </div>
                    <div className="">
                        <h4 className="text-xl  font-medium mb-3">Direction</h4>
                        <MapComponent mapLocation={[13.121138811680156, 80.14875751114344]} />

                    </div>

                </aside>
            </div>
        </>
    )
}

export default Overview

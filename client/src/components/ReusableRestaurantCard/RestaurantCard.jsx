import React from 'react'
import { AiFillStar } from "react-icons/ai"

const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white w-full  rounded-2xl overflow-hidden cursor-pointer mt-3 lg:mt-1 p-2 border-2 border-white hover:border-2 hover:border-gray-200 hover:shadow-md">
                <div className="w-full relative overflow-hidden">

                    {props.isOff && <span className="absolute bottom-3 left-0 bg-blue-600 text-white text-sm px-1 font-medium" >
                        &#8377;{`${props.isOff}`} OFF
                    </span>}

                    {props.isPro && <span className="absolute bottom-11 left-0 bg-pink-600 text-white text-sm px-1 font-medium">
                        Pro extra 20% OFF
                    </span>}
                    <span className="absolute bottom-3 left-0 bg-blue-600 text-white text-sm px-1 font-medium" >
                        &#8377;50 OFF
                    </span>


                    <img src={props.photos.length && props.photos[0]}
                        alt="food"
                        className="w-full h-60 rounded-2xl " />

                </div>

                <div className="w-full flex flex-col py-1 mt-1">
                    <div className="w-full flex justify-between ">
                        <h1 className=" text-lg font-normal">{props.name}</h1>
                        <span className=" flex bg-green-600 items-center text-white text-xs font-bold px-2 rounded-md h-6">
                            {props.restaurantReviewValue}   <AiFillStar />
                        </span>
                    </div>
                    <div className="text-gray-500 flex justify-between ">
                        <p> {props.cusine.join(", ")}</p>
                        <p className="mr-2">
                            &#8377;{props.averageCost}  for one
                        </p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default RestaurantCard

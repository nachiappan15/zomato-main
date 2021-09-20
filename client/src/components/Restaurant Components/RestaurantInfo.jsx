import React from 'react'
import { IoIosStar } from "react-icons/io"

const RestaurantInfo = (props) => {
    return (
        <>
            <div className="my-4">
                <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center justify-between">
                    <h1 className="text-xl md:text-4xl md:font-semibold ">
                        {props.title}
                    </h1>
                    <div className="flex items-center gap-8 text-xs md:text-base ">

                        <div className="flex items-center  gap-1 ">
                            <span className="flex items-center text-white rounded-lg gap-1 font-medium bg-green-600 py-1 px-2">
                                {props.restaurantRating} <IoIosStar />
                            </span>
                            <span>
                                <strong>2</strong>
                                <p className="border-b border-black border-dashed">Dining Reviews</p>
                            </span>
                        </div>

                        <div className="flex items-center gap-1" >
                            <span className="flex  items-center text-white rounded-lg gap-1 font-medium bg-green-600 py-1 px-2">
                            {props.deliveryRating} <IoIosStar />
                            </span>
                            <span>
                                <strong>2</strong>
                                <p className="border-b border-black border-dashed">Delivery Reviews</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-base md:text-lg text-gray-600">
                    <h3>{props.cusine.join(", ")}</h3>
                    <h3 className="text-gray-400">{props.address}</h3>
                    <h3><span className="text-yellow-700">Open Now</span> 6am – 9pm (Today)</h3>
                </div>

            </div>

        </>
    )
}

export default RestaurantInfo

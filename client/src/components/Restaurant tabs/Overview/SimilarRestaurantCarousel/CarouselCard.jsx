import React from 'react'
import { IoIosStar } from "react-icons/io"

const CarouselCard = () => {
    return (
        <>
        <div className="mx-2  shadow-lg">
        <div className="flex flex-col w-full h-full ">
                <div className="h-24 md:h-52 lg:h-52 rounded-lg overflow-hidden" >
                    <img src="https://b.zmtcdn.com/data/pictures/4/18503354/184de5ecc86aa596f2eeb50980acc46d_featured_v2.jpg"
                        alt=""
                        className="w-full  h-full" />
                </div>
                <div className="">
                    <h1 className="text-base md:text-xl text-semibold text-black">Liza Restaurant</h1>
                    <div className="flex items-center gap-2  text-xs md:text-sm ">

                        <div className="flex items-center  md:gap-1 font-light text-gray-600">
                            <span className="flex items-center text-white rounded-lg px-1 gap-1 font-medium bg-green-600  ">
                                3.5 <IoIosStar />
                            </span>
                            <span>
                                <p className="">Dining Reviews</p>
                            </span>
                        </div>

                        <div className="flex items-center gap-1 font-light text-gray-600" >
                            <span className="flex  items-center px-1 text-white rounded-lg gap-1 font-medium bg-green-600 ">
                                4 <IoIosStar />
                            </span>
                            <span>
                                <p className="">Delivery Reviews</p>
                            </span>
                        </div>
                    </div>
                    <div className="font-light text-gray-600 text-base">
                        <p>North Indian, Chinese, Mughlai,</p>
                        <p>vepery , chennai</p>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default CarouselCard

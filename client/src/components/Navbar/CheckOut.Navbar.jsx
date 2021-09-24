import React from 'react'


// icons
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai"



const CheckOutNavbar = () => {
    return (
        <>
            <nav className="w-full bg-white shadow-md lg:shadow-none flex items-center p-2 mb-1 ">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex w-full items-center justify-between ">
                        <AiOutlineArrowLeft />
                        <div className="w-24">
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                alt="logo"
                                className="w-full h-full" />
                        </div>
                        <div className="flex gap-3 items-center">

                            <span className=" border border-gray-600 text-req-400 rounded-full  flex items-center justify-center p-2 ">
                                <FaUserAlt /> 
                            </span>
                            UserName
                        </div>

                    </div>
                </div>


            </nav>
            {/* <MobileSearchBar /> */}
        </>
    )
}

export default CheckOutNavbar;


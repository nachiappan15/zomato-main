import React from 'react'
import FoodItem from '../components/Cart/FoodItem'
import AddressList from '../components/Checkout/AddressList'
import {BsShieldLockFill} from "react-icons/bs"


const CheckOut = () => {
    const address = [
        {
            name: "Home",
            address : "India",

        },
        {
            name: "Gym",
            address : "India",

        },
        {
            name: "Office",
            address : "India",

        },

    ]

    return (
        <>
            <div className="flex flex-col items-center gap-3 my-3">
                <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
                <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className=" w-full flex flex-col items-center gap-2">
                        <h5 className="text-base  tracking-wider ">ORDER FROM</h5>
                        <div className="w-full flex gap-1 flex-col items-center text-gray-400">
                            <h4>WallNut Coffee</h4>
                            <small className="">No 203, Chennai - Tiruvallur High Rd, Secretariat Colony, Vivek Nagar, Ambattur, Avadi, Tamil Nadu 600054.</small>
                        </div>
                        <div className="px-4 flex flex-col my-4 w-full md:w-3/5">
                            <FoodItem/>
                            <FoodItem/>
                            <FoodItem/>
                        </div>
                        <div className="flex flex-col my-4 w-full md:w-3/5 gap-2">
                            <h4 className="text-xl font-semibold">
                                Choose an Address
                            </h4>
                         <AddressList address = {address}/>
                        </div>
                    </div>
                    <button className="w-full px-4 my-4 md:my-8  flex items-center justify-center gap-2 md:w-4/5 h-14 text-white font-medium text-lg bg-req-400 rounded-lg">
                        Pay Securely <BsShieldLockFill/>
                        </button>
                </div>
            </div>
        </>
    )
}

export default CheckOut

import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright, } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import FoodItem from './FoodItem'
const CartSM = (props) => {
    return (
        <>
            <div className="md:hidden flex items-center justify-between px-2  py-1">
                <div className="flex flex-col items-start gap-1">
                    <span className="flex items-center gap-1 font-semibold" onClick={props.toggle}>
                        1 Item <IoMdArrowDropdown />
                    </span>
                    <h4>
                        &#8377; 300 <sub>(plus tax )</sub>
                    </h4>
                </div>
                <button className="flex items-center gap-1 bg-req-400 text-white px-3 py-1 rounded-lg">
                    continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )
}


const CartLG = (props) => {
    return (
        <>
            <div className="hidden md:flex items-center justify-between container  py-2 px-20 mx-auto">
                <div className="flex  gap-2 items-center  text-xl font-medium">
                    <span className="border border-gray-300 p-1 rounded" onClick={props.toggle}>
                        <IoMdArrowDropdown />
                    </span>
                    <h4 className="flex gap-1 items-center">
                        Your Orders(1)
                    </h4>
                </div>
                <div className="flex gap-2 items-center text-lg">
                    <h4 className="flex gap-1 items-center font-medium">
                        Sub Total: &#8377; 300 <sub>(plus tax )</sub>
                    </h4>
                    <button className="flex items-center gap-1 bg-req-400  text-white px-3 py-1 rounded-lg">
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    )
}



const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen(prev => !prev)
    const closeCart = () => setIsOpen(false)


    return (
        <>





            <div className=" w-full fixed bg-white  z-10 bottom-0  ">
                {isOpen && (
                    <div className="w-full  bottom-16 container mx-auto   rounded-lg  h-48  overflow-y-scroll bg-white ">

                        <div className="w-full flex flex-col px-4">
                            <div className="flex justify-between  items-center">
                                <h3 className="font-medium text-xl py-2">Your Orders</h3> <IoCloseOutline onClick={closeCart} />

                            </div>
                            <hr className="my-2 " />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                        </div>
                    </div>
                )}
                <CartSM toggle={toggleCart} />
                <CartLG toggle={toggleCart} />
            </div>
        </>
    )
}

export default CartContainer

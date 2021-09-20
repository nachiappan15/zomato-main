import React from 'react'
import ReactStars from "react-rating-stars-component";
import {BiPlus} from "react-icons/bi";

const FoodItemCard = (props) => {
    return (
        <>
            <div className="flex flex-wrap  gap-3 w-full   hover:shadow-md cursor-pointer">
                <div className="h-40 w-full md:w-2/12 md:h-32">
                    <img src={props.image} alt="food"
                        className="w-full h-full rounded-lg object-cover" />
                </div>
                <div className="h-full w-full md:w-8/12">
                    <h3 className="text-lg md:text-xl font-semibold" >{props.title}</h3>
                    <ReactStars count={5} value={props.rating} />
                    <h5 className="md:text-lg">&#8377; {props.price}</h5>
                    <p className="truncate md:text-lg ">
                        {props.descrp}
                    </p>
                </div>
                <div className="">
                    <button className="text-req-400 bg-req-50 border border-req-400 px-3 py-2 rounded-lg flex gap-2 items-center hover:bg-req-400 hover:text-white "> 
                        Add <BiPlus/>   
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodItemCard

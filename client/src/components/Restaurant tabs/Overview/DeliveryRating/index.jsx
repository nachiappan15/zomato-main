import React from 'react'
import {AiFillStar} from "react-icons/ai"

const DeliveryRatings = () => {
    const x = [1, 2, 3, 4, 5];
    return (
        <>
        <div className="flex gap-2">
        {
                x.map(i=> {
                    return<>
                     <button className="flex gap-1 px-2 text-gray-400 items-center border border-gray-400 rounded-lg hover:text-req-400 hover:border-req-400">{i}<AiFillStar/> </button>
                    </>
                })
            }
        </div>
            
           

            

            
        </>
    )
}

export default DeliveryRatings

import React, { useState } from 'react'
import ReviewCard from '../../Restaurant Components/ReviewCard'
import DeliveryRatings from '../Overview/DeliveryRating'
import AddReviewCard from './AddReviewCard'


const Reviews = () => {

    // State
    const [reviews, setReviews] = useState(["", ""])
    return (
        <>
            <div className=" flex flex-col md:flex-row relative gap-3 justify-between">


                <div className=" h-full w-full  md:w-4/6  ">
                    <div className="md:hidden my-2 shadow-md" >
                        <AddReviewCard/>
                    </div>
                    <div className="flex flex-col gap-3">
                        {reviews.map(review => {
                            return <>
                                <ReviewCard {...review} />
                            </>
                        })}
                        
                    </div>
                </div>


                <aside style={{ height: "fit-content" }} className=" hidden md:flex p-3   md:w-2/6  sticky top-0 right-0   shadow-lg  flex-col gap-3">
                   
                   
                   <AddReviewCard/>
                </aside>
            </div>

        </>
    )
}

export default Reviews
/*
<div className=" flex flex-col md:flex-row relative gap-3 justify-between">


                <div className=" h-full w-full  md:w-4/6  ">
                  <div className="flex flex-col gap-3">
        {reviews.map(review => {
            return<>
            <ReviewCard {...review}/>
            </>
        })}
        </div>
                </div>


                <aside style={{ height: "fit-content" }} className=" hidden md:flex p-3   md:w-2/6  sticky top-0 right-0   shadow-xl  flex-col gap-3">

                </aside>
            </div>
*/
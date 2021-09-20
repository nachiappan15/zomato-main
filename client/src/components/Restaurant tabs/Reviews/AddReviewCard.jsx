import React, { useState } from 'react'
import DeliveryRatings from '../Overview/DeliveryRating'


// component
import ReviewModal from './ReviewModal'


const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col gap-4 mt-3">

                <div className="flex flex-col gap-1 ">
                    <h1 className="text-2xl font-medium ">Rate your Experience for</h1>

                    <div className="flex gap-5">
                        <div className="flex gap-2 items-center text-lg">
                            <input type="radio" name="rating" id="delivery" />
                            <label htmlFor="delivery">Delivery</label>
                        </div>
                        <div className="flex gap-2 items-center text-lg">
                            <input type="radio" name="rating" id="dining" />
                            <label htmlFor="dining">Dining</label>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <DeliveryRatings />
            </div>

            <div >
                <h3 onClick={openModal} className="text-red-500 text-lg cursor-pointer">Write a Review</h3>
            </div>

        </>
    )
}

export default AddReviewCard

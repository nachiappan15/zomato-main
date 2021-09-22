import React from 'react'


const FoodItem = (props) => {


    return (
        <>
            <div className="flex flex-col gap-2">
                            <div className="flex items-center    justify-between ">
                                <h4 className="font-medium text-lg">
                                    WallNut Coffee
                                </h4>
                                <div className="flex flex-col gap-1 items-center">
                                    <small className="font-medium text-base"> &#8377; 300</small>
                                    <div >
                                        <button className="bg-req-400 text-white rounded px-2 py-1  mx-2">-</button>
                                        <small>0</small>
                                        <button className="bg-req-400 text-white rounded px-2 py-1  mx-2">+</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr className="my-2" />
        </>
    )
}

export default FoodItem

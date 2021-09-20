import React from 'react'
import { GoPrimitiveDot, GoStar } from "react-icons/go"

const NutritionCard = () => {
    return (
        <>

            <div className=" w-full flex flex-col   rounded-2xl overflow-hidden cursor-pointer mt-3 lg:mt-1 p-2  shadow-md">
                <div className=" h-60 rounded-2xl py-4 justify-center items-center flex" >
                    <img src="https://dote.zmtcdn.com/prod/data/admin_assets/images/d48/11c6a1894ec289e68a26d4399cff5d48_1617345459.png?output-format=webp"
                        alt="supplements"
                     className="h-full "/>
                </div>


                <div className="text-base text-gray-500 flex flex-col gap-4">
                    <div>
                        <div className="flex gap-2">
                            <GoPrimitiveDot className="h-4 border-green-500 border-2 text-green-500" />
                            <GoStar className="h-4 text-yellow-400" />

                        </div>
                        <div className="flex flex-col ">
                            <h1 className="text-xl text-black font-semibold">Sleep-Timed Release Melotonin</h1>
                            <p>Helps promote mental wellness, improve concentration, attention span and memory.</p>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <p className="text-black font-semibold"> ₹135</p>
                        <p>monhthly pack 30 capsules</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NutritionCard

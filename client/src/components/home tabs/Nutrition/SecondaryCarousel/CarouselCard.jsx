import React from 'react'

const CarouselCard = () => {
    return (
        <>
            <div className="lg:h-48 lg:mx-4 mx-2  rounded-xl shadow-md border-b-2 " >
                <div className="h-full w-auto   flex flex-col items-center gap-5 justify-center text-center">
                    <div className="lg:h-32 " >
                        <img src="https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp" alt=""
                            className="h-full" />
                    </div>
                    <h1 className="text-gray-600 lg:text-2xl text-sm font-light">Protiens & Fitness</h1>
                </div>

            </div>

        </>
    )
}

export default CarouselCard

import React from 'react'
import { IoMdArrowDropright } from "react-icons/io"

const CarouselCard = () => {
    return (
        <>
            <div className="lg:h-80 lg:w-auto h-60 md:h-72 w-48 ml-2 relative lg:mx-3 rounded-xl overflow-hidden text-white" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU" alt=""
                    className="h-full w-full" />
                <p className="absolute  bottom-9 left-2 text-xl">Newly Opened</p>
                <p className="absolute bottom-2  left-2 flex items-center gap-1 align-middle">24 Places<IoMdArrowDropright className="h-full" /> </p>
                <div className="h-full bottom-0 w-full" style={{position:"absolute", zIndex:3, background: "rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%) repeat scroll 0% 0%" , opacity:.3 }} />
            </div>
        </>
    )
}

export default CarouselCard

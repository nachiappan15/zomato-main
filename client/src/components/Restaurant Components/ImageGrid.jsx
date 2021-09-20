import React from 'react'
import { AiOutlineCamera } from "react-icons/ai"

const ImageGrid = (props) => {
    return (
        <>

            <div className="w-full h-60 md:hidden"> {/*mobile devices */}
                <img src={props.images[0]}
                    alt="res-img"
                    className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="hidden w-full h-full md:flex gap-2 cursor-pointer ">
                <div className="w-full h-full overflow-hidden">
                    <img src={props.images[0]}
                        alt=""
                        className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-110" />
                </div>

                <div className="w-1/4  flex flex-col gap-1">
                    <img src={props.images[1]}
                        alt=""
                        className="w-full h-full object-cover rounded-lg" />
                    <img src={props.images[2]}
                        alt=""
                        className="w-full h-full object-cover rounded-lg" />

                </div>

                <div className="w-1/4  flex flex-col gap-1">
                    <div className="w-full h-full relative rounded-lg overflow-hidden">
                        <img src={props.images[3]}
                            alt=""
                            className="w-full h-full object-cover rounded-lg" />

                        <div className="absolute inset-0 bg-opacity-70 bg-black w-full h-full" />
                        <h4 className="absolute w-full h-full font-semibold inset-y-2/4  text-center text-white">View Gallery</h4>
                    </div>


                    <div className="w-full h-full relative rounded-lg overflow-hidden">
                        <img src={props.images[4]}
                            alt=""
                            className="w-full h-full object-cover rounded-lg" />

                        <div className="absolute inset-0 bg-opacity-90 bg-gray-500 w-full h-full" />

                        <div className="absolute flex flex-col items-center w-full h-full font-semibold inset-y-1/4  text-center text-white">
                            <div className="bg-black p-3 rounded-full bg-opacity-50">
                                <AiOutlineCamera  />
                            </div>

                            <h4>view Gallery</h4>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default ImageGrid

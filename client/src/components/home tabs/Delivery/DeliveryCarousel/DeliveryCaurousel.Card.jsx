import React from 'react'
// sizing
const SmCard = (props) => {
    return (
        <>
            <div className="md:hidden   bg-white shadow-md rounded-lg overflow-hidden ">
                <div className="w-full h-24 ">
                    <img src={props.image}
                        alt="food"
                        className="w-full h-full object-cover " />
                </div>
                <div>
                    <h3 className="text-sm text-center font-light mb-1  ">
                        {props.name}
                    </h3>
                </div>

            </div>
        </>
    )
}

const MdCard = (props) => {
    return (
        <>
            <div className="hidden md:block  mt-2  bg-white  overflow-hidden md:mx-3">
                <div className="w-full md:h-44 lg:h-48 ">
                    <img src={props.image}
                        alt="food"
                        className="w-full h-full object-cover rounded-lg " />
                </div>
                <div>
                    <h3 className="text-lg     font-semibold   my-1 lg:my-2">
                        {props.name}
                    </h3>
                </div>

            </div>
        </>
    )
}

const DeliveryCaurouselCard = (props) => {
    return (
        <>
            <SmCard {...props}/>
            <MdCard {...props} />
        </>
    )
}

export default DeliveryCaurouselCard

import React from 'react'

const BrandsCards = (props) => {
    return (
        <>
            <div className="h-full w-full bg-white lg:px-5 px-1" >
                <div  className="h-24 w-fll md:h-36  lg:h-40 ">
                    <img src={props.image}
                        alt="brand"
                        className="h-full w-full rounded-md shadow-md border-1" />
                </div>
                <div className ="w-full my-1">
                    <h3 className ="font-light text-center">60 mins</h3>
                </div>
            </div>
        </>
    )
}

export default BrandsCards;

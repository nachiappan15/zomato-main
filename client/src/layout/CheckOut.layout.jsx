import React from 'react'
import CheckOutNavbar from '../components/Navbar/CheckOut.Navbar'



const CheckOutLayout = (props ) => {
    return (
        <>
            <CheckOutNavbar/>
            <div className="container px-4 mx-auto md:px-20">
                {props.children}
            </div>
        </>
    )
}

export default CheckOutLayout
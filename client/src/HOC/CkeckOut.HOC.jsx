import React from 'react'
import CheckOutLayout from '../layout/CheckOut.layout'
import {Route} from "react-router-dom"


const CkeckOutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
           <Route {...rest} component={({ props }) =>(
                <CheckOutLayout>
                    <Component {...props}/>
                </CheckOutLayout>
            )} />
        </>
    )
}

export default CkeckOutHOC

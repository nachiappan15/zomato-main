import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'


const Tabs = (props) => {
    const { id } = useParams();

    return <>

        <Link to={`/restaurant/${id}/${props.route}`}>
        <div className={props.isActive ? "px-3 pb-4 text-lg md:text-2xl mr-4  cursor-pointer   h-full font-medium text-req-400  border-b border-req-500" : "px-3 pb-4 text-lg md:text-2xl mr-4  cursor-pointer text-gray-600  h-full font-medium"}>
            <h3>{props.name}</h3>
        </div>
        </Link>

    </>
}

const ResTabContainer = () => {
    const location = useLocation();
    const currrentPath = location.pathname;


    const tab_details = [

        {
            id: `overView`,
            route: `overView`,
            name: "Overview",
            isActive: currrentPath.includes("/overView")

        },
        {
            id: `orderOnline`,
            route: `orderOnline`,
            name: "Order Online",
            isActive: currrentPath.includes("/orderOnline")

        },
        {
            id: `reviews`,
            route: `reviews`,
            name: "Reviews",
            isActive: currrentPath.includes("/reviews")

        },
        {
            id: `menu`,
            route: `menu`,
            name: "Menu",
            isActive: currrentPath.includes("/menu")

        },
        {
            id: `photos`,
            route: `photos`,
            name: "Photos",
            isActive: currrentPath.includes("/photos")

        },


    ]


    return (
        <>
            <div className="flex items-center gap-3 md:gap-4 overflow-x-scroll md:overflow-auto md:border-b md:border-gray-600">
                {tab_details.map(i => {
                    return <>
                        <Tabs {...i} key={i.id} />
                    </>
                })}
            </div>
        </>
    )
}

export default ResTabContainer

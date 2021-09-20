import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropright } from "react-icons/io"
import MenuCollection from './MenuCollection';

const Menu = () => {
    const { id } = useParams();
    return (
        <>
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-medium">Menu</h4>

                <Link to={`/restaurant/${id}/menu`}>
                    <span className="flex items-center gap-1 text-req-500 ">
                        See all menu <IoMdArrowDropright />
                    </span>
                </Link>
            </div>

            <div className="flex flex-wrap gap-3">
                <MenuCollection images = {["https://b.zmtcdn.com/data/pictures/chains/0/67170/1ba128786fe1d3db026928a52041eb7c.jpg", "https://b.zmtcdn.com/data/pictures/chains/0/67170/1ba128786fe1d3db026928a52041eb7c.jpg" , "https://b.zmtcdn.com/data/pictures/chains/0/67170/096d3be915fc540d58b8cf8d3a6874d4.jpg"]} pages={2} title = "demo" />
            </div>
        </>
    )
}

export default Menu

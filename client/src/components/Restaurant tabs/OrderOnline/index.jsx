import React from 'react'
import FloatMenuButton from './FloatMenuButton.jsx'
import MenuListContainer from './MenuListContainer.jsx'
import { AiOutlineCompass } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"

import FoodList from './FoodList'


const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex gap-2">
                <aside className="hidden md:block w-1/4 ">

                    <MenuListContainer />

                </aside>
                <div className="w-full md:w-3/4 mt-3">
                    <div className="mb-3">
                        <h2 className="text-2xl font-semibold">Order Online</h2>
                        <h4 className="flex text-lg items-center font-light text-gray-500">
                            <AiOutlineCompass /> Live track your order! <BiTimeFive /> 45 mins
                        </h4>
                    </div>
                    <FoodList title="Recomended" items={[
                        {
                            image: "https://b.zmtcdn.com/data/dish_photos/678/11f739ba5109339b6ee6c5d070e4a678.jpg",
                            title: "Plain Tea Cake",
                            rating:  3,
                            price: 100,
                            descrp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis, necessitatibus asperiores perferendis eaque repudiandae neque, nam obcaecati consequatur minus vero dicta nostrum, sunt culpa voluptate ipsa iusto quis quo!"
                        },
                        {
                            image: "https://b.zmtcdn.com/data/dish_photos/678/11f739ba5109339b6ee6c5d070e4a678.jpg",
                            title: "Plain Tea Cake",
                            rating:  3,
                            price: 100,
                            descrp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis, necessitatibus asperiores perferendis eaque repudiandae neque, nam obcaecati consequatur minus vero dicta nostrum, sunt culpa voluptate ipsa iusto quis quo!"
                        },
                        {
                            image: "https://b.zmtcdn.com/data/dish_photos/678/11f739ba5109339b6ee6c5d070e4a678.jpg",
                            title: "Plain Tea Cake",
                            rating:  3,
                            price: 100,
                            descrp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis, necessitatibus asperiores perferendis eaque repudiandae neque, nam obcaecati consequatur minus vero dicta nostrum, sunt culpa voluptate ipsa iusto quis quo!"
                        },
                        {
                            image: "https://b.zmtcdn.com/data/dish_photos/678/11f739ba5109339b6ee6c5d070e4a678.jpg",
                            title: "Plain Tea Cake",
                            rating:  3,
                            price: 100,
                            descrp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis, necessitatibus asperiores perferendis eaque repudiandae neque, nam obcaecati consequatur minus vero dicta nostrum, sunt culpa voluptate ipsa iusto quis quo!"
                        }
                    ]} />
                </div>

            </div>
            <FloatMenuButton />

        </>
    )
}

export default OrderOnline

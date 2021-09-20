import React from 'react'
import FoodItem from './FootItemCard'


const FoodList = (props) => {
    return (
        <>
        <div className="mb-3 w-full h-screen overflow-y-scroll overflow-x-visible">
                        <h2 className="text-2xl font-semibold sticky top-0 bg-white px-2 z-10   py-3 w-full">{props.title}</h2>
                        <div className="flex flex-col gap-2">
                        {props.items.map(item=>{
                            return<>
                             <FoodItem {...item}/>
                            </>
                           
                        })}
                        </div>
                        
                        {/* <FoodItem image = "https://b.zmtcdn.com/data/dish_photos/678/11f739ba5109339b6ee6c5d070e4a678.jpg"
                        title="Plain Tea Cake"
                            rating={3}
                            price={100}
                            descrp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nobis, necessitatibus asperiores perferendis eaque repudiandae neque, nam obcaecati consequatur minus vero dicta nostrum, sunt culpa voluptate ipsa iusto quis quo!"
                        /> */}
                       
                    </div>
            
        </>
    )
}

export default FoodList

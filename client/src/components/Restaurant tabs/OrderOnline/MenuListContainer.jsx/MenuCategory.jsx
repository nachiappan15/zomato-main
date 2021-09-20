import React from 'react'

const MenuCategory = (props) => {
    return (
        <>
            <div className={props.isActive ? "cursor-pointer text-req-400 bg-req-100 border-r-2 border-req-400":"cursor-pointer "}
            onClick={props.onClickHandler}
           >
            
                <h3  id = {props.name} className="text-lg font-semibold my-2">
                    {props.name}  ({props.items.length})
                </h3>
            </div>
        </>
    )
}

export default MenuCategory

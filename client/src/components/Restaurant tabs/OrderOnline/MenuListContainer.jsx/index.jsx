import { useState } from "react"
import React from 'react'
import MenuCategory from "./MenuCategory"

const MenuListContainer = () => {
    const [selected, setSelected] = useState("")

    const onClickHandler = (e) => {        
        if (e.target.id) {
            setSelected(e.target.id)
        }
        return
    }
   return <> 
   <div className="w-full flex flex-col">
    <MenuCategory name="recomended"  items = {["", ""]} onClickHandler = {onClickHandler} 
    isActive = {selected === "recomended"}/>
    <MenuCategory name="item" items = {["", ""]} onClickHandler = {onClickHandler} 
    isActive = {selected === "item"}/>
    
   </div>
   </>
}

export default MenuListContainer

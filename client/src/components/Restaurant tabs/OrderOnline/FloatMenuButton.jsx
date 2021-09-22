import React, {useState} from 'react'
import  {HiMenu} from "react-icons/hi"
import {RiCloseFill} from "react-icons/ri"
import MenuListContainer from './MenuListContainer.jsx'

const FloatMenuButton = () => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleMenu = () => setIsClicked((prev) => !prev
    )
    return (
        <>
        <div className="w-6/12 Z-10 fixed bottom-2 right-2 md:hidden flex flex-col gap-2 items-end  z-30">
            {isClicked && <div className="w-full p-3 overflow-scroll h-48 bg-white">
                <MenuListContainer/>
            </div>}
            <button onClick = {toggleMenu} className =" bg-black text-white  px-3 py-2 rounded-full  flex gap-3 items-center">
                {isClicked ? <RiCloseFill/>:<HiMenu/>} Menu
            </button>

        </div>
        </>
    )
}

export default FloatMenuButton

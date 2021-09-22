import React, { useState } from 'react'


// icons
import { FaUserAlt } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { MdArrowDropUp, RiArrowDownSFill, RiSearchLine } from "react-icons/ri"


// components
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'

import UserDropDown from './UserDropDown'


// mobile view
const MobileNav = ({ signIn ,signUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    return <>
        <div className="flex w-full items-center justify-between md:hidden">
            <div className="w-24">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full" />
            </div>
            <div className="flex gap-3 items-center   relative  ">
                <button className="text-white bg-req-400 rounded-full px-2 py-1 text-sm">use App</button>
                <span onClick= {() => setIsDropDownOpen(prev => !prev)} className="border border-gray-600 text-req-400 rounded-full cursor-pointer  flex items-center justify-center p-2 ">
                    <FaUserAlt />
                </span>
                {isDropDownOpen &&
                    (<div className="shadow-md absolute flex flex-col gap-2 right-0 cursor-pointer rounded-lg border bg-white w-24 -bottom-16 ">
                        <button onClick={signIn}>Sign In</button>
                        <button onClick={signUp}>Sign Up</button>
                    </div>)}
            </div>

        </div>
    </>
}

// extended search bar in mobile
const MobileSearchBar = () => {
    return <>
        <div className="flex items-center gap-3 w-full bg-white border p-2  md:hidden rounded-2xl mx-1 my-1" >
            <div className="p-1 flex items-center gap-2 w-full ">
                <span className="text-req-400"><HiLocationMarker /></span>
                <input type="text" placeholder="Benguluru" className="h-full w-full focus:outline-none" />
                <RiSearchLine className="mr-3" />
            </div>
        </div>
    </>
}

// medium devices
const MediumNav = ({ signIn, signUp }) => {
    return <>
        <div className="hidden md:flex lg:hidden w-full  items-center  gap-2 ">
            <div className="w-24 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo"
                    className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3 w-full bg-white shadow-md p-2 border border-gray-200">
                <div className="p-1 flex items-center gap-2 border-r-2 border-gray-300">
                    <span className="text-req-400"><HiLocationMarker /></span>
                    <input type="text" placeholder="Benguluru" className="h-full focus:outline-none" />
                    <RiArrowDownSFill />
                </div>
                <div className="flex items-center gap-2 w-full ">
                    <RiSearchLine />
                    <input type="search" placeholder="Search Here..." className="w-full focus:outline-none" />
                </div>
            </div>
            <div className="flex gap-2">
                <button className=" text-xs text-gray-500 hover:text-gray-700 border-2 rounded-lg border-gray-500 px-1" onClick={signIn} >Login</button>
                <button className=" text-sm text-gray-500 hover:text-gray-700  border-2 rounded-lg border-gray-500 px-1" onClick={signUp}>SignUp</button>
            </div>
        </div>
    </>

}

// large devices
const LargeNav = ({ signIn , signUp }) => {
    return <>
        <div className="hidden lg:inline container px-44 mx-auto my-2">
            <div className="hidden lg:flex w-full   items-center  gap-5  ">
                <div className="w-44 ">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full" />
                </div>
                <div className="flex items-center gap-3 w-full bg-white  border border-gray-200  h-12 rounded-md">
                    <div className="p-1 flex items-center gap-2 border-r-2 border-gray-300">
                        <span className="text-req-400"><HiLocationMarker /></span>
                        <input type="text" placeholder="Benguluru" className="h-full focus:outline-none" />
                        <RiArrowDownSFill />
                    </div>

                    <div className="flex items-center gap-2 w-full ">
                        <RiSearchLine />
                        <input type="search" placeholder="Search for restaurant, cusine or dish" className="w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex gap-2 ml-12" >
                    <button className=" text-xl text-gray-500 hover:text-gray-700 px-1" onClick={signIn}>Login</button>
                    <button className=" text-xl text-gray-500 hover:text-gray-700   px-1" onClick={signUp}>SignUp</button>
                </div>
            </div>
        </div>
    </>

}

const Navbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)

    const openSignInModal = () => setOpenSignIn(true);
    const openSignUpModal = () => setOpenSignUp(true);

    return (

        <>
            <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
            <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp}/>

            <nav className="w-full bg-white shadow-md lg:shadow-none flex items-center p-2 mb-1 ">

                <MobileNav signIn={openSignInModal} signUp = {openSignUpModal} />
                <MediumNav signIn={openSignInModal} signUp = {openSignUpModal}/>
                <LargeNav signIn={openSignInModal} signUp = {openSignUpModal}/>

            </nav>
            <MobileSearchBar />
        </>
    )
}

export default Navbar

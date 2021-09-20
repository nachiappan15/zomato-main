import React from 'react'
import {AiOutlineStar} from "react-icons/ai"
import {FaDirections,FaRegBookmark} from "react-icons/fa"
import {RiShareForwardLine} from "react-icons/ri"
 
const ResInfoButtons = () => {
    const button_details  = [
        {
            name:"Add Review" ,
            icon:<AiOutlineStar/>,
            isRed:true
        },
        {
            name:"Direction" ,
            icon:<FaDirections/>,
            isRed:false
        },
        {
            name:"Bookmark" ,
            icon:<FaRegBookmark/>,
            isRed:false
        },
        {
            name:"Share" ,
            icon:<RiShareForwardLine/>,
            isRed:false
        }
    ]

    return (
        <>
             <div className="my-4 md:flex gap-3 hidden">
                    {button_details.map(button => {
                        return<>
                        <button className={button.isRed ? " flex items-center bg-req-300 text-white px-3 py-1 rounded-lg hover:bg-req-400" :  " flex items-center text-req-400 bg-white px-3 py-1 rounded-lg border border-gray-500"}>
                      {button.icon}  {button.name}
                    </button>
                        </>
                    })}

                </div>
        </>
    )
}

export default ResInfoButtons

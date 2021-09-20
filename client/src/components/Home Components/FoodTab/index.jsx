import React, { useState, useEffect } from 'react'
import { BsBag } from "react-icons/bs";
import { RiFootprintLine, RiHeartAddLine } from "react-icons/ri"
import { GiCoffeeCup } from "react-icons/gi";
import { useParams, Link } from "react-router-dom";

// mobile view
const MobileTab = (props) => {
    const allTypes = props.detail;
    return <>

        <div className=" w-full h-20 bg-white flex items-center justify-center lg:hidden shadow-md fixed bottom-0 z-10">
            {allTypes.map(item => {
                return (<>
                    <Link to={item.id} className="w-full">
                        <div className={item.isActive ? `h-full w-full  justify-center rounded-md cursor-pointer bg-white text-req-400 flex flex-col items-center gap-1 border-t-2 border-req-400 ` : `h-full w-full   justify-center rounded-md cursor-pointer bg-white flex flex-col items-center gap-1 hover:bg-req-400 hover:text-white`} >
                            {item.icon}
                            <span className="text-sm">
                                {item.name}
                            </span>
                        </div>
                    </Link>

                </>)
            })}
        </div>
    </>
};

// Desktop tab at top
const DesktopTab = (props) => {

    const allTypes = props.detail;
    return <>

        <div className=" w-full mx-auto container h-20 px-44  my-3 hidden lg:block" >
            <div className="text-gray-500 w-2/3  h-full flex gap-5 font-medium">
                {allTypes.map(item => {
                    return (<>
                        <Link to={item.id} className="w-full">
                            <div className={item.isActive ?`h-12  flex items-center justify-center cursor-pointer border-b-4 rounded-md border-req-300`:`h-12  flex items-center justify-center cursor-pointer border-b-4 border-white rounded-md  hover:bg-req-300 hover:border-req-300 hover:text-white`}>
                                <span className=" text-xl">
                                    {item.name}
                                </span>
                            </div>
                        </Link>

                    </>)
                })}
            </div>
        </div>
    </>
    
       
}




const FoodTab = () => {
    const { type } = useParams();
    // state
    const [types, setTypes] = useState([
        {
            id: `delivery`,
            icon: <BsBag />,
            name: "Delivery",
            isActive: false,

        },
        {
            id: `dining`,
            icon: <RiFootprintLine />,
            name: "Dining Out",
            isActive: false,

        },
        {
            id: `night`,
            icon: <GiCoffeeCup />,
            name: "Night Life",
            isActive: false,

        },
        {
            id: `nutrition`,
            icon: <RiHeartAddLine />,
            name: "Nutrition",
            isActive: false,

        }
    ]

    );

    // useeffect
    useEffect(() => {
        const updating = () => {
            const updateTypes = types.map((item) => {
                if (item.id === type) {
                    return { ...item, isActive: true }
                }
                return { ...item, isActive: false };
            });
            setTypes(updateTypes);
        }
        updating();

    }, [type]);

    return (
        <>
            <div>
                <MobileTab detail={types} className="w-full" />
                <DesktopTab detail={types} />
            </div>
        </>
    )
}
export default FoodTab

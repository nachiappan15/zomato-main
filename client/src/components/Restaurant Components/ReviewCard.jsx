import React from 'react'
import { AiFillStar } from "react-icons/ai"

const ReviewCard = () => {
    return (
        <>
            <div className=" flex flex-col gap-3 my-3">
                {/* hearder */}
                <div className="flex  items-center   justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4h1B8CMfadXgfKeNcNleBEARIvHzdnjZRw&usqp=CAU"
                                alt="avatar"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col ">
                            <h3 className="text-lg font-semibold">User Name</h3>
                            <span className="text-xs font-medium text-gray-500"> 5 Reviews &#8226; 10 Followers</span>
                        </div>
                    </div>
                    <button className="text-req-400 border-2 border-req-400 px-2 rounded-md hover:bg-req-400 bover hover:text-white">Follow</button>



                </div>

                {/* card body */}
                <div className=" flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 flex gap-1 items-center px-2 py-1 rounded-lg">3 <AiFillStar /></span>
                        <h5 className="font-medium uppercase">Delivery</h5>
                        <small className="text-gray-500"> 3 days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full font-light text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cum nesciunt consequuntur, ducimus sint assumenda maxime cumque culpa eaque nam dolores sapiente? Asperiores, officiis! Labore perferendis inventore officiis eveniet in.
                            Commodi quam ea deleniti veniam, corporis distinctio sint porro sequi. Asperiores, rem? Non aliquid eveniet doloremque placeat vero consequuntur, nobis eius tenetur, impedit possimus vel porro molestiae corrupti consequatur laborum.
                            Possimus nemo dolore, voluptas inventore, porro eligendi accusamus ea veniam ipsa provident sunt beatae itaque quidem eos minus excepturi? Optio, a vitae. Facere recusandae nostrum saepe quasi, maiores ducimus repellat?
                        </p>

                    </div>
                </div>


            </div>
        </>
    )
}

export default ReviewCard

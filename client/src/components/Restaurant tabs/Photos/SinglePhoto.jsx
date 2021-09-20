
import React  from 'react'


const SinglePhoto = (props) => {
   
    return (
        <>
            {/* <ImgsViewer
                imgs={props.images}
                currImg={currImage}
                isOpen={isMenuOpen}
                onClickPrev={prevImg}
                onClickNext={nextImg}
                onClose={closeViewer}
            /> */}
          


            <div className=" w-32 h-36 md:h-48 md:w-48 text-center  flex flex-col" onClick={props.openViewer}>
                <div className="w-full h-full overflow-hidden ">
                    <img src={props.image} alt="menu"
                        className="w-full h-full rounded-lg " />
                </div>
                
            </div>

        </>
    )
}

export default SinglePhoto


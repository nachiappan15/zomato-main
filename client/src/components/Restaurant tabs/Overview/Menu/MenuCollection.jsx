import React, { useState } from 'react'
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    const [currImage, setCurrImage] = useState(0);

    const prevImg = () => setCurrImage((prev) => prev -= 1);
    const nextImg = () => setCurrImage((prev) => prev += 1);
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
            {isMenuOpen && (
                <ImageViewer
                    src={props.images}
                    currentIndex={currImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                 className="z-40"/>
            )}


            <div className=" w-32 h-36 md:h-48 md:w-48 text-center  flex flex-col" onClick={openViewer}>
                <div className="w-full h-full overflow-hidden ">
                    <img src={props.images[0]} alt="menu"
                        className="w-full h-full rounded-lg " />
                </div>
                <strong className="">{props.menuTitle} </strong>
                <p className="">{props.pages} Pages</p>
            </div>

        </>
    )
}

export default MenuCollection

import React,{useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';
import SinglePhoto from './SinglePhoto';


const Photos = () => {
    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/chains/0/67170/8b468c8bce485d9e0ec13c75d97ab0b0_featured_v2.jpg", "https://b.zmtcdn.com/data/pictures/chains/0/67170/096d3be915fc540d58b8cf8d3a6874d4.jpg", "https://b.zmtcdn.com/data/pictures/chains/0/67170/1ba128786fe1d3db026928a52041eb7c.jpg"]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    const [currImage, setCurrImage] = useState(0);

    const prevImg = () => setCurrImage((prev) => prev -= 1);
    const nextImg = () => setCurrImage((prev) => prev += 1);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                    className="z-40" />
            )}
            <div className="flex flex-wrap  mt-3 gap-4 py-4">

            {
                photos.map(photo => {
                    return<>
                    <SinglePhoto image={photo} openViewer = {openViewer} />
                    </>
                })
            }
            </div>
        </>
    )
}



export default Photos

import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import { MdContentCopy } from "react-icons/md"
import { FaDirections } from "react-icons/fa"


// [13.121138811680156, 80.14875751114344]
const MapComponent = (props) => {
    return (
        <>
            <div className="w-full h-48">
                <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={props.mapLocation}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <p className="text-lg my-1 font-medium">26/2, Raja Annamalai Road, Purasavakkam, Chennai</p>
            <div className="flex gap-4">
                <button className="flex items-center gap-2 px-3 py-1 text-gray-700 border border-gray-400 rounded-lg">
                    <MdContentCopy />Copy
                </button>
                <button className="flex items-center gap-2 px-3 py-1 text-gray-700 border border-gray-400 rounded-lg">
                    <FaDirections className="text-req-400" /> Direction
                </button>
            </div>


        </>
    )
}

export default MapComponent

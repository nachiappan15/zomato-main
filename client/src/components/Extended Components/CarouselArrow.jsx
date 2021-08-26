import React from 'react'

export const PrevArrow = (props) => {
    return (
        <div className = {props.className} 
        style = {{...props.style, backgroundColor : "#e23744" ,left : -5 ,zIndex:2 ,borderRadius:"50%"}}
        onClick = {props.onClick}>
            
        </div>
    )
}

export const NextArrow = (props) => {
    return (
        <div className = {props.className} 
        style = {{...props.style, backgroundColor : "#e23744",right : -5 ,zIndex:2 ,borderRadius:"50%"}}
        onClick = {props.onClick}>
            
        </div>
    )
}

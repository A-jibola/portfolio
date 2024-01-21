import React, { useEffect } from 'react'

export default function LinkStyle({linkName}) {

    useEffect(()=>{
        if(window.location.pathname === linkName){
            document.getElementById(linkName).classList.add('pinkdot')
        }
    },[linkName])

    return (
    <span id={linkName}> &#9679; </span>
    )
}

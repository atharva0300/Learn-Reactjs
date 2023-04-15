import React, { useRef, useState } from 'react'

import UseImperativeHandleHook from './UseImperativeHandleHook'



function ParentImperativeHandle() {

    const buttonRef = useRef(null)



    return (
        <div>   
            <button ref = {buttonRef} onClick = {() => {
                buttonRef.current.alterToggle();
            }}>From the parent</button>
           
            <UseImperativeHandleHook ref = {buttonRef} />
            
        </div>
    )
}

export default ParentImperativeHandle

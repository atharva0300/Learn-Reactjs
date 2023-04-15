import React from 'react'

import { useEffect } from 'react';

import { useRef } from 'react';

function UseRefHook() {

    const inputRef = useRef(null)
    // passing the dom element value as null
    
    const onClickButton =() => {    
        inputRef.current.value = "InputRef temp"
        console.log(inputRef.current.value)
        // .current.value means the current value of the input ref 

        inputRef.current.focus()
        // focussing on the dom element which has the inputRef ( here the input )   

    }

    return (
        <div>
            <h1>Atharva</h1>
            <input type = "text" placeholder = "Enter text" ref = {inputRef} />
            <button onClick = {onClickButton}>Change Name</button>
        </div>
    )
}

export default UseRefHook

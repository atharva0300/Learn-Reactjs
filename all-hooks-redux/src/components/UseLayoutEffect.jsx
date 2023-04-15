import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {

    const inputRef = useRef(null)


    useEffect(() => {
        console.log('Use Effect output')
    } , [])

    


    useLayoutEffect(() => {
        console.log('Use Layout effect output')
    } , [])
    // use layout effect is executed before the stuff gets displayed on the page ( before useEffect )

    // useLayout is executed first, then useEffect

  return (
    <div>       
        <input ref = {inputRef} value = "Atharva" style = {{width : 400 , height : 100}} />
    </div>
  )
}

export default UseLayoutEffect

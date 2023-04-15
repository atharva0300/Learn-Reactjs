import React, { useCallback } from 'react'

import { useState } from 'react'
import Child from './files/Child'

const UseCallbackHook = () => {
    const [toggle , setToggle] = useState(false)
    const [data , setData]  = useState("Yo, this is Atharva")

    const returnComment = useCallback((name) => {
        setData(name)
        return data
    }, [data])

    // in useCallback -> we are storing the function and not state

  return (
    // we are passing a function 
    // with useCallback -> we are accessing the function 
    // with useMemo -> we are accessing the value
    <div>
        <Child returnComment = {returnComment} />

        <button onClick = {() => {
            setToggle(!toggle)
        }} >Toggle</button>

        {toggle && <h2>toggle</h2>}
    </div>
  )
}

export default UseCallbackHook

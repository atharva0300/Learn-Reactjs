import React, { useEffect } from 'react'

const Child = ({returnComment}) => {

    useEffect(() => {
        console.log("FUNCTION WAS CALLED")
    } , [returnComment])
  return (
    <div>
        {returnComment("Atharva from the Child component")}
    </div>
  )
}

export default Child

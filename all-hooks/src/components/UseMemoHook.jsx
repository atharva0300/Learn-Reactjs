import React from 'react'

import { useEffect , useState , useMemo } from 'react'

import axios from "axios"

const UseMemoHook = () => {
    const [data , setData] = useState(null)
    const [toggle , setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(
            (response) => {
                // when successful get request 
                setData(response.data)
            }
        )
    } , [])

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";

        for(let i=0;i<comments.length;i++){
            let currentName = comments[i].name
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }

        console.log("This WAS COMPUTED")

        return longestName
    }

    // useMemo to tell reactjs to execute a function only when there is a change in the data 

    const getLongestName = useMemo(() => 
        // gets the compute function 
        findLongestName(data),
        [data]      // dependency array (checking this array, if it changes, then recompute )
    )


  return (
    <div>
        <div>
            {getLongestName}
            <br/>
            <button onClick = {() => {
                setToggle(!toggle)
            }}>BUTTON</button>
            {toggle && <h2>Hidden Message</h2>}
        </div>
    </div>
  )
}

export default UseMemoHook

import React from 'react'


import { useState } from 'react'

import axios from "axios";

/*
Axios is used to detect page render or render the page when something has been changed */

import { useEffect } from 'react';

function UseEffectHook() {

    const [data , setData] = useState("")
    // initializing to empty string

    const [count , setCount] = useState(0)

    useEffect(() => {
        // executes this page block whenever the page renders
        
        console.log('Hello world')

        axios.get('https://jsonplaceholder.typicode.com/comments').then(
            (response) => {
                // executes when the get request is successful
                console.log(response.data)

                // setting the data 
                setData(response.data[0].email)
                console.log('API was called')
            }
        )
        
    }, [count])     // calling the useEffect when the count is changed

  return (
    <div>
        <h2>This is a useEffect hook text</h2>
        {data}
        <button onClick = {() => setCount(count+1)} >INCREMENT</button>
        {count}
    </div>
  )
}

export default UseEffectHook

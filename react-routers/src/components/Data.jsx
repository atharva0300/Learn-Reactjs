import React, { useState } from 'react'

import { useEffect } from 'react'

// importing the useLoaderData hook
import { useLoaderData } from 'react-router-dom'

// importing the useNavigation hook
import { useNavigation } from 'react-router-dom'

export const Data = () => {
  // const [data , setData] = useState()

  const dogUrl = useLoaderData();
  // uses the loaderData function which is passed to this by the App.js

  const navigation = useNavigation()

  if(navigation.state==='loading'){
    // if the navigation is loading then,
    return <h1>Loading...</h1>
  }
  return (
    <div>
        {" "}
        <img src = {dogUrl} />{" "}
        <br/>
    </div>
  )
}

export const dataLoader = async () => {
  // function which will make the fetching for the above component
  const res = await fetch("https://random.dog/woof.json")

  const dog = await res.json()

  return dog.url


}


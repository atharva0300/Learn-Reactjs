import React, { createContext, useContext, useState } from 'react'
import Login from './files/Login'
import User from './files/User'

// a context is a collection of states
export const AppContext = createContext(null)
// creating a context

const UseContextHook = () => {

    const [username , setUsername] = useState("")

    // creating a context that has  the access to all the states and the functions of the components

  return (
    <div>
      <AppContext.Provider value = {{username  , setUsername}}>
        <Login  />
        <User />
      </AppContext.Provider>
    </div>
  )
}

export default UseContextHook


import React from 'react'

import { useContext } from 'react'

// importing the app context 
import {AppContext} from '../UseContextHook';

const Login = () => {

    const {setUsername} = useContext(AppContext)
    // passing the app context
    // then we grab the username from the context



  return (
    <div>
        <input onChange = {(event) => {
            setUsername(event.target.value)
        }} />
    </div>
  )
}

export default Login

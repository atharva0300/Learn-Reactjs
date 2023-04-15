import React from 'react'

import { useContext } from 'react'

import {AppContext} from '../UseContextHook';


const User = () => {

    const {username} = useContext(AppContext);

  return (
    <div>
      <h2>User : {username}</h2>
    </div>
  )
}

export default User

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {increment, decrement , incrementByValue } from './counterSlice'
import { updateToggle } from './toggleSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const toggleValue = useSelector((state) => state.toggleSlice.toggle)

  // selectors to access the posts , status and error message 
  const postList = useSelector((state) => state.postSlice.posts)
  const status = useSelector((state) => state.postSlice.status)
  const error = useSelector((state) => state.postSlice.error)

  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(
            increment()
          )}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(
            decrement()
          )}
        >
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch(updateToggle())} >Toggle Button</button>
      {toggleValue && <h2>Toggle Text here</h2>}

      <br/>
      <h2>Posts : {postList}</h2>
      <h2>Status : {status}</h2>
      <h2>Error : {error}</h2>
    </div>
  )
}

export default Counter
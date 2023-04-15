import React from 'react'


import { useState } from 'react'

function UseStateHook() {


  return (
    <div>
      <input placeholder = "Enter a number" onChange = {onChange}/>
      {inputValue}
      <br/>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseStateHook

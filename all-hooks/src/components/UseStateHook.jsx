import React from 'react'

/*
use state hook is used to change the state of a value on the webpage 
the usestate contains the default variable and a function which will act upon the variable 
ex - a counter app

*/

// importing the usestate hook
import { useState } from 'react'

function UseStateHook() {
  let counter2 = 0

  const [counter , setCounter] = useState(0)
  // the 0 is the default value of the counter ( or the starting value )

  const [inputValue , setInputValue ] = useState("Atharva")

  const increment = () => {
    counter2 += 1
    /*
     the coutner value is incrementing 
       but the reactjs is not rendering 
       so we cannot see that here
     */
    console.log(counter2)

    // calling the setCounter function and changing the state 
    setCounter(counter + 1)
    // this will update the counter value and update the div 
    // it will render the counter 

  }

  let onChange = (event) => {
    // the evvent value is passed by default 

    let newValue = event.target.value
    console.log(newValue)

    setInputValue(newValue)
  }

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

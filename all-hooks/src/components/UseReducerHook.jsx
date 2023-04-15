import React from 'react'

import { useReducer } from 'react'



// reducer function 
const reducer = (state, action ) => {
    // state -> the set of states 
    // action -> all the actions of the states
    switch(action.type){
        case "INCREMENT" : return {
            count : state.count + 1 ,
            text : state.text }

        case "DECREMENT" : return {
            count : state.count - 1 ,
            text : state.text }
        
        case "toggleShowText" : return {
            text : !state.text,
            count : state.count
        }

        default : return {
            state
            // returning the default state for default case
        }

    }


}


function UseReducerHook() {
    
  const [state , dispatch ] = useReducer(
    // the state will hold more than one state 
    // the dispatch will have many functions to change the state
    reducer  ,  // passing the reducer function that we have created 
    {
        count : 0,    // first state and initial vlaue 
        text : true   // second state and initial value
    }  
  )


  return (
    // we use state.count instead of count and state.text instead of text
    // we pass the dispatch action and mention the type of the action
    <div>
      <br/>
      {state.count}
      <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
      <button onClick = {() => dispatch({type : "DECREMENT"})}>DECREMENT</button>
      <br/>
      {state.text && <h2>This is a text</h2>}
    </div>
  )
}

export default UseReducerHook

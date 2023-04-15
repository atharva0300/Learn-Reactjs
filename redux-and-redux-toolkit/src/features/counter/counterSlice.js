// creating a counterSLice 
import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value : 0
    // metioning the initial value of the object
}


export const counterSlice = createSlice({
    name : 'counter',    // name of the slice
    initialValue,   // mentioning the initalState 
    reducers : {
        // defining the reducers here
        increment : (state) => {
            // takes state as an input
            // perform updation of the state 
            state.value += 1
        },

        decrement : (state) => {
            // takes state as an input 
            // perform updationf of the state 
            state.value -= 1 
        },
        incrementByValue : (state , action) => {
            // takes state and the action as the input 
            // the action contains the data that is given by the user or the any other data

            state.value += action.payload
        }
    }
})

// exporitng the reducers individually 
export const { increment , decrement , incrementByValue} = counterSlice.actions

// default export 
export default counterSlice.reducer
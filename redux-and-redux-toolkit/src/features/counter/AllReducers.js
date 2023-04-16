import React from "react";


export const myReducer = {
    // the myReducer is an objects which contains the reducer functions

    increment : (state) => {
        state.value += 1 
    },  // this is a reducer function

    decrement : (state) => {
        state.value -= 1
    },// this is a reducer function

    incrementByValue : (state , action) => {
        state.value += action.payload
    }   // this is a reducer function
}

export const toggleReducer = {
    updateToggle : (state) => {
        state.toggle = !state.toggle 
        console.log(state.toggle)
    }
}
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { toggleReducer } from "./AllReducers";


const initialValue = {
    toggle : false
    // the initial value to the toggle variable
}

// creating out slice 
export const toggleSlice = createSlice({
    name : 'toggleSlice',
    initialState : initialValue,
    reducers : toggleReducer
})

// exporting the reducer and the actions 
export const { updateToggle } = toggleSlice.actions

export default toggleSlice.reducer


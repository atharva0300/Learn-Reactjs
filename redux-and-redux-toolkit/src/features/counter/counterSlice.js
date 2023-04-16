// creating a counterSLice 
import { createSlice } from "@reduxjs/toolkit"
import { myReducer , toggleReducer } from "./AllReducers"


const initialValue = {
    value : 10,
    // metioning the initial value of the object

    toggle : false
}


export const counterSlice = createSlice({
    name : 'counter',    // name of the slice
    initialState : initialValue,   // mentioning the initalState 
    reducers : myReducer
})



export const { increment , decrement , incrementByValue , updateToggle } = counterSlice.actions

export default counterSlice.reducer

// create a redux store 
import { configureStore  } from "@reduxjs/toolkit";

// importing the counterSlice as counterReducer
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
    reducer : counterReducer,
    // adding the counterSlice to the store inside the reducer
})
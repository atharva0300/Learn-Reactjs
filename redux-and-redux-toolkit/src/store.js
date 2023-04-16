// create a redux store 
import { configureStore  } from "@reduxjs/toolkit";

// importing the counterSlice as counterReducer
import counterReducer from './features/counter/counterSlice'
import toggleSlice from "./features/counter/toggleSlice";
import PostSlice from "./features/counter/postSlice";

const store = configureStore({
    reducer : {
        counter : counterReducer,
        toggleSlice : toggleSlice,
        postSlice : PostSlice
    }
})

export default store
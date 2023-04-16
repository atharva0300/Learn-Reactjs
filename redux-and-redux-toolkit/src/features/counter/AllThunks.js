import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";

// importing the axios
import axios from 'axios'


// the base url for fetchin the data
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"



// creating a thunk 
export const fetchPosts = createAsyncThunk(
    'postSlice/fetchPosts' , async () => {
        const response = await axios.get(BASE_URL)
        console.log(response.data)
        return response?.data
    }
)

export const deletePost = createAsyncThunk("postSlice/deletePost", async (initialPost) => {
    const {id} = initialPost
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        if (response?.status === 200) return initialPost;
        return `${response.status} : ${response.statusText}`;
    } catch (error) {
        return error.message
    }
})


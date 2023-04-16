import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { deletePost, fetchPosts } from "./AllThunks";


const initialValue = {
    posts : ['initial post'],
    status : 'idle',
    error : ''
}

// creating the posts slice 
export const postSlice = createSlice({
    name : 'postSlice',
    initialState : initialValue,
    reducers : {},  extraReducers(builder){
        builder.addCase(fetchPosts.pending , (state , action) => {
            state.status = 'Loading'
        })
        .addCase(fetchPosts.fulfilled , (state , action) => {
            state.status = 'Fulfilled'
        })
        .addCase(fetchPosts.rejected , (state , action) => {
            state.status = "failed"
            state.error = action.error.message
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            if (!action?.payload.id) {
                console.log("could not delete");
                console.log(action.payload)
                return 
            }

            const { id } = action.payload;
            const OldPosts = state.posts.filter(post => post.id !== id)
            state.posts = OldPosts
        })
    }
})

// exporting the postSlice 
export default postSlice.reducer


export const selectAllPosts = (state) => state.postSlice.posts
export const getPostsError = (state) => state.postSlice.error
export const getPostsStatus = (state) => state.postSlice.status
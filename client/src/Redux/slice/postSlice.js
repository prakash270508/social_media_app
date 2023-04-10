import { createSlice } from "@reduxjs/toolkit";
import { allPosts } from "../services/postService";

const initialState = {
    isLoading : true,
    allPostsList : [],
    post : {},
    isError : false
}

export const postSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {},
    extraReducers : (builder)=>{
        builder
        .addCase(allPosts.pending, (state)=>{
            state.isLoading = true
            state.isError = false
        })
        .addCase(allPosts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.allPostsList = action.payload
        }).addCase(allPosts.rejected, (state, action)=>{
            state.isError = true
            state.isLoading = false
        })
    }
})

export default postSlice
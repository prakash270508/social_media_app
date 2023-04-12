import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const allPosts = createAsyncThunk("allposts", async () => {
  try {
    const response = await axios.get("http://localhost:3001/posts/getAllFeed");

    return response.data.post;
  } catch (error) {
    throw new Error(error.message)
  }
});




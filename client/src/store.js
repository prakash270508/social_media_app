import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/slice/userSlice";
import postReducer from "./Redux/slice/postSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    posts: postReducer.reducer, //This is only to show that we can do both ways 
  },
});

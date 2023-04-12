import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../services/userService";

const initialState = {
  users: [],
  user: {},
  isLoadingUser: false,
  isError: false,
  errorMessageUser: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allUsers.pending, (state) => {
        state.isLoadingUser = true;
        state.isError = false;
        state.errorMessageUser = "";
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.users = action.payload;
      })
      .addCase(allUsers.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isError = true;
        state.errorMessageUser = action.error.message;
      });
  },
});

export default userSlice.reducer;

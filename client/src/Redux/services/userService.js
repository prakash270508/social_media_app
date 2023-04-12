import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const allUsers = createAsyncThunk("allUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3001/user/allUsers");
    return response.data.users;
  } catch (error) {
    throw new Error(error);
  }
});

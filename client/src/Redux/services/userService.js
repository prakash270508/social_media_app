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

export const regiser = createAsyncThunk(
  "register-user",
  async (registerData) => {
    try {
      const reponse = await axios.post(
        "http://localhost:3001/regiser",
        registerData
      );
      return reponse.data.savedUser;
    } catch (error) {
      throw new Error(error);
    }
  }
);

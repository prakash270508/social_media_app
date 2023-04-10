import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    user : {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},

})

export default userSlice.reducer
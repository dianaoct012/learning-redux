import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {};

const slice = createSlice({
    name: "currentUser",
    initialState: initialState,
    reducers: {
        changeUser: (user, action)=> {
            user.name = action.payload.name
        },
    }
})

export const { changeUser} = slice.actions;
export default slice.reducer;
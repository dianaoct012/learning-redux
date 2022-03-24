import { configureStore } from "@reduxjs/toolkit";

import reducer from "./productSlice"
const store = configureStore({
    reducer
})
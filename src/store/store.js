import { configureStore } from "@reduxjs/toolkit";
import { wordSlice } from "./slices/word/wordSlice";

export const store = configureStore({
    reducer: {
        word: wordSlice.reducer,
    }
})

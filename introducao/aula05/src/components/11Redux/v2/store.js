import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./slices/idSlices"

export const store = configureStore(
    {
        reducer : {
            id: idReducer,
        }
    }
)
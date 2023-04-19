import { configureStore } from "@reduxjs/toolkit";
import idReducer from "../slices/idSlices"

//inicializando 
export const store = configureStore(
    {
        reducer : {
            id: idReducer,
        }
    }
)
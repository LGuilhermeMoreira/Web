import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 1}

export const idSlice = createSlice({
    name: "id",
    initialState,
    reducers : {
        incrementar : (state) => {state.value > 150 ? state.value = state.value : state.value  += 1},
        decrementar : (state) => {state.value < 2 ? state.value = state.value : state.value -= 1},
    }
})

export const {incrementar , decrementar } = idSlice.actions

export default idSlice.reducer //idReducer